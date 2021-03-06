class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_comment, only: [:show, :edit, :update, :destroy, :like, :dislike, :cancel]
  before_action :only_owner, only: [:edit, :update, :destroy]
  before_action :authenticate_user!, except: [:index, :show]

  # GET /comments
  # GET /comments.json
  def index
    @comments = Comment.all
  end

  # GET /comments/1
  # GET /comments/1.json
  def show
  end

  # GET /comments/new
  def new
    @comment = Comment.new
  end

  # GET /comments/1/edit
  def edit
  end

  # POST /comments
  # POST /comments.json
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render json: {status: 200}
    else
      render json: {status: 500, erros: @comment.errors}
    end
  end

  # PATCH/PUT /comments/1
  # PATCH/PUT /comments/1.json
  def update
    respond_to do |format|
      if @comment.update(comment_params)
        format.html { redirect_to @comment, notice: 'Comment was successfully updated.' }
        format.json { render :show, status: :ok, location: @comment }
      else
        format.html { render :edit }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /comments/1
  # DELETE /comments/1.json
  def destroy
    @comment.destroy
    respond_to do |format|
      format.html { redirect_to comments_url, notice: 'Comment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def like
    @like = Like.new(user_id: current_user.id, comment_id: @comment.id, is_like: true)
    Vote.transaction do
      if @like.save
        @comment.like_count += 1
        @comment.save
        render :show, status: :ok, location: @comment
      else
        render json: @like.errors, status: :unprocessable_entity
      end
    end
  end

  def dislike
    @like = Like.new(user_id: current_user.id, comment_id: @comment.id, is_like: false)
    Vote.transaction do
      if @like.save
        @comment.dislike_count += 1
        @comment.save
        render :show, status: :ok, location: @comment
      else
        render json: @like.errors, status: :unprocessable_entity
      end
    end
  end

  def cancel
    @like = Like.where(user_id: current_user.id, comment_id: @comment.id).take
    unless @like.nil?
      if @like.is_like
        @comment.like_count -= 1
      else
        @comment.dislike_count -= 1
      end
      Vote.transaction do
        @comment.save
        @like.destroy
      end
    end
    render :show, status: :ok, location: @comment
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
      params.require(:comment).permit(:debate_id, :content, :comment_id)
    end

    def only_owner
      unless @comment.user_id == current_user.id
        redirect_to :root
        return
      end
    end
end
