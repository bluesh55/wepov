class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @user_votes = @user.vote_histories

    respond_to do |format|
      format.json do
        debates_id = []
        debates_id = @user.reasons.map { |r| r.point.debate.id }
        debates_id += @user.points.map { |p| p.debate.id }
        debates_id += @user.debates.map { |d| d.id }
        debates_id = debates_id.uniq

        @user_debates = Debate.where(id: debates_id)
      end

      format.html
    end
  end
end
