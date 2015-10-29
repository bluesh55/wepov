require 'test_helper'

class DebatesControllerTest < ActionController::TestCase
  include Devise::TestHelpers

  setup do
    @debate = debates(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:debates)
  end

  test "logged in should get new" do
    sign_in users(:one)
    get :new
    assert_response :success
  end

  test "not authenticated should get redirect" do
    get :new
    assert_response :redirect
  end

  test "should create debate" do
    sign_in users(:one)
    assert_difference('Debate.count') do
      post :create, debate: { cons_count: @debate.cons_count, content: @debate.content, image: @debate.image, is_visible: @debate.is_visible, priority: @debate.priority, pros_count: @debate.pros_count, title: @debate.title, user_id: @debate.user_id }
    end

    assert_redirected_to debate_path(assigns(:debate))
  end

  test "should show debate" do
    get :show, id: @debate
    assert_response :success
  end

  test "should get edit" do
    sign_in users(:one)
    get :edit, id: @debate
    assert_response :success
  end

  test "should update debate" do
    sign_in users(:one)
    patch :update, id: @debate, debate: { cons_count: @debate.cons_count, content: @debate.content, image: @debate.image, is_visible: @debate.is_visible, priority: @debate.priority, pros_count: @debate.pros_count, title: @debate.title, user_id: @debate.user_id }
    assert_redirected_to debate_path(assigns(:debate))
  end

  test "should destroy debate" do
    sign_in users(:one)
    assert_difference('Debate.count', -1) do
      delete :destroy, id: @debate
    end

    assert_redirected_to debates_path
  end
end
