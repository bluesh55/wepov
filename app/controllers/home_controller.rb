class HomeController < ApplicationController
  before_action :authenticate_user!, only: [:mypage]
  def index
    @debates = Debate.all
  end

  def mypage
    @debates = Debate.all
  end
end
