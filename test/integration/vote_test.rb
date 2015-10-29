require 'test_helper'

class VoteTest < ActionDispatch::IntegrationTest
  def setup
    @vote = votes(:one)
    @debate = Debate.create
  end

  test "vote should be uniqueness" do
    dup_vote = @vote.dup
    assert_not dup_vote.valid?
  end

  test "get vote pros link" do
    get "/debates/1/pros"
    assert_response :success
  end

  test "get vote cons link" do
    get "/debates/1/cons"
    assert_response :success
  end
end
