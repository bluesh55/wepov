class DebatesController < ApplicationController
  before_action :set_debate, only: [:show, :edit, :update, :destroy, :pros, :cons, :cancel]
  before_action :authenticate_user!, except: [:index, :show]
  before_action :only_owner, only: [:edit, :update, :destroy]

  # GET /debates
  # GET /debates.json
  def index
    @debates = Debate.all
  end

  # GET /debates/1
  # GET /debates/1.json
  def show
  end

  # GET /debates/new
  def new
    @debate = Debate.new
  end

  # GET /debates/1/edit
  def edit
  end

  # POST /debates
  # POST /debates.json
  def create
    @debate = Debate.new
    @debate.title = params[:title]
    @debate.image = params[:image]
    @debate.content = params[:content]
    @debate.user_id = current_user.id

    respond_to do |format|
      if params[:points] and @debate.save
        params[:points].each do |p|
          Point.create(user_id: current_user.id, debate_id: @debate.id, title: p)
        end
        format.html { redirect_to @debate, notice: 'Debate was successfully created.' }
        format.json { render :show, status: :created, location: @debate }
      else
        format.html { render :new }
        format.json { render json: @debate.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /debates/1
  # PATCH/PUT /debates/1.json
  def update
    respond_to do |format|
      if @debate.update(debate_params)
        format.html { redirect_to @debate, notice: 'Debate was successfully updated.' }
        format.json { render :show, status: :ok, location: @debate }
      else
        format.html { render :edit }
        format.json { render json: @debate.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /debates/1
  # DELETE /debates/1.json
  def destroy
    @debate.destroy
    respond_to do |format|
      format.html { redirect_to debates_url, notice: 'Debate was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def pros
    @vote = Vote.new(user_id: current_user.id, debate_id: @debate.id, is_pros: true)
    Vote.transaction do
      if @vote.save
        @debate.pros_count += 1
        @debate.save
        render :show, status: :ok, location: @debate
      else
        render json: @vote.errors, status: :unprocessable_entity
      end
    end
  end

  def cons
    @vote = Vote.new(user_id: current_user.id, debate_id: @debate.id, is_pros: false)
    Vote.transaction do
      if @vote.save
        @debate.cons_count += 1
        @debate.save
        render :show, status: :ok, location: @debate
      else
        render json: @vote.errors, status: :unprocessable_entity
      end
    end
  end

  def cancel
    @vote = Vote.where(user_id: current_user.id, debate_id: @debate.id).take
    unless @vote.nil?
      if @vote.is_pros
        @debate.pros_count -= 1
      else
        @debate.cons_count -= 1
      end
      Vote.transaction do
        @debate.save
        @vote.destroy
      end
    end
    render :show, status: :ok, location: @debate
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_debate
      @debate = Debate.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def debate_params
      params.require(:debate).permit(:title, :image, :content)
    end

    def only_owner
      unless @debate.user_id == current_user.id
        redirect_to :root
        return
      end
    end
end
