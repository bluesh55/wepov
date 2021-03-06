class PointsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_point, only: [:show, :edit, :update, :destroy, :up, :down, :block]
  before_action :authenticate_user!, except: [:index, :show]
  before_action :only_owner, only: [:edit, :update, :destroy]
  before_action :only_debate_creator, only: [:up, :down, :block]

  # GET /points
  # GET /points.json
  def index
    @points = Point.all
  end

  # GET /points/1
  # GET /points/1.json
  def show
  end

  # GET /points/new
  def new
    @point = Point.new
  end

  # GET /points/1/edit
  def edit
  end

  # POST /points
  # POST /points.json
  def create
    @point = Point.new(point_params)
    @point.user_id = current_user.id

    if @point.save
      render :json => {status: 1, point: @point}
    else
      render :json => {status: -1, errors: point.errors}
    end
  end

  # PATCH/PUT /points/1
  # PATCH/PUT /points/1.json
  def update
    point = Point.find_by(id: params[:id], user: current_user)

    if point.reasons.length == 0 and point.update(title: params[:title])
      render :json => {status: 1}
    else
      render :json => {status: -1, :errors => point.errors}
    end
  end

  # DELETE /points/1
  # DELETE /points/1.json
  def destroy
    @point.destroy
    render :json => {status: 1}
  end

  def up
    @point.priority += 1
    @point.save
    render :show, status: :ok, location: @point
  end

  def down
    @point.priority -= 1
    @point.save
    render :show, status: :ok, location: @point
  end

  def block
    @point.priority = -1
    @point.is_visible = false
    @point.save
    render :show, status: :ok, location: @point
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_point
      @point = Point.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def point_params
      params.require(:point).permit(:debate_id, :title)
    end

    def only_owner
      unless @point.user_id == current_user.id
        redirect_to :root
        return
      end
    end

    def only_debate_creator
      unless @point.debate.user_id == current_user.id
        redirect_to :root
        return
      end
    end
end
