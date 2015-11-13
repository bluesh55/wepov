class ReasonsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_reason, only: [:show, :edit, :update, :destroy, :up, :down, :block]
  before_action :authenticate_user!, except: [:index, :show]
  before_action :only_owner, only: [:edit, :update, :destroy]
  before_action :only_debate_point_creator, only: [:up, :down, :block]

  # GET /reasons
  # GET /reasons.json
  def index
    @reasons = Reason.all
  end

  # GET /reasons/1
  # GET /reasons/1.json
  def show
  end

  # GET /reasons/new
  def new
    @reason = Reason.new
  end

  # GET /reasons/1/edit
  def edit
  end

  # POST /reasons
  # POST /reasons.json
  def create
    @reason = Reason.new(reason_params)
    @reason.user_id = current_user.id

    if @reason.save
      render :json => {status: 1}
    else
      render :json => {status: 1, erros: @reason.errors}
    end
  end

  # PATCH/PUT /reasons/1
  # PATCH/PUT /reasons/1.json
  def update
    respond_to do |format|
      if @reason.update(reason_params)
        render :json => {status: :ok, location: @reason}
      else
        render :json => {errors: @reason.errors, status: :unprocessable_entity}
      end
    end
  end

  # DELETE /reasons/1
  # DELETE /reasons/1.json
  def destroy
    @reason.destroy
    render :json => {status: 1}
  end

  def up
    @reason.priority += 1
    @reason.save
    render :show, status: :ok, location: @reason
  end

  def down
    @reason.priority -= 1
    @reason.save
    render :show, status: :ok, location: @reason
  end

  def block
    @reason.priority = -1
    @reason.is_visible = false
    @reason.save
    render :show, status: :ok, location: @reason
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reason
      @reason = Reason.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def reason_params
      params.require(:reason).permit(:point_id, :is_pros, :title, :content)
    end

    def only_owner
      unless @reason.user_id == current_user.id
        redirect_to :root
        return
      end
    end

    def only_debate_point_creator
      unless @reason.point.debate.user_id == current_user.id or @reason.point.user_id == current_user.id
        redirect_to :root
        return
      end
    end
end
