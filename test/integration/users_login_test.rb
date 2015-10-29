require 'test_helper'

class UserLoginTest < ActionDispatch::IntegrationTest
  def setup
    @user = users(:one)
  end

  test "login with valid information" do
    get new_user_session_path
    post user_session_path, session: {email: @user.email, password: '12345678'}
    assert_response :success
  end
end
