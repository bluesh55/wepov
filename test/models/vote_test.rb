require 'test_helper'

class VoteTest < ActiveSupport::TestCase
  def setup
    @vote = Vote.new(user_id: 1, debate_id: 1, is_pros: true)
  end

  test "vote should be unique" do
    duplicate_vote = @vote.dup
    duplicate_vote.user_id = @vote.user_id
    duplicate_vote.debate_id = @vote.debate_id
    @vote.save
    assert_not duplicate_vote.valid?
  end
end
