class HomeController < ApplicationController
  def index
    @debates = Debate.all
  end

  def mypage
    @debates = Debate.all
  end
end
