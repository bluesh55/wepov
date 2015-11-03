class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @user_votes = @user.vote_histories
    @user_debates = @user.debates
    @user_reasons = @user.reasons
  end
end
