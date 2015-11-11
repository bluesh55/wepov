class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @user_votes = @user.vote_histories

    respond_to do |format|
      format.json do
        @user_debates = @user.writes
      end
      format.html
    end
  end

  def session
    @user = current_user
  end
end
