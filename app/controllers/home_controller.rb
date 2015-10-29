class HomeController < ApplicationController
  def index
    @debates = Debate.all
  end
end
