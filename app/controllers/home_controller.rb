class HomeController < ApplicationController
  before_action :authenticate_user!, only: [:mypage]
  def index
    @debates = Debate.all
  end

  def profile
    @user = User.find(params[:id])
    @user_votes = @user.vote_histories
    @user_debates = @user.debates
    @user_points = @user.points
  end
end
