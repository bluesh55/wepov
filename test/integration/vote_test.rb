require 'test_helper'

class VoteTest < ActionDispatch::IntegrationTest
  def setup
    @vote = votes(:one)
  end

  test "vote should be uniqueness" do
    dup_vote = @vote.dup
    assert_not dup_vote.valid?
  end
end
