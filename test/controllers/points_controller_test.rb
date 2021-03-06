require 'test_helper'

class PointsControllerTest < ActionController::TestCase
  include Devise::TestHelpers

  setup do
    @point = points(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:points)
  end

  test "should get new" do
    sign_in users(:one)
    get :new
    assert_response :success
  end

  test "should create point" do
    sign_in users(:one)
    assert_difference('Point.count') do
      post :create, point: { debate_id: @point.debate_id, is_visible: @point.is_visible, priority: @point.priority, title: @point.title, user_id: @point.user_id }
    end

    assert_redirected_to point_path(assigns(:point))
  end

  test "should show point" do
    get :show, id: @point
    assert_response :success
  end

  test "should get edit" do
    sign_in users(:one)
    get :edit, id: @point
    assert_response :success
  end

  test "should update point" do
    sign_in users(:one)
    patch :update, id: @point, point: { debate_id: @point.debate_id, is_visible: @point.is_visible, priority: @point.priority, title: @point.title, user_id: @point.user_id }
    assert_redirected_to point_path(assigns(:point))
  end

  test "should destroy point" do
    sign_in users(:one)
    assert_difference('Point.count', -1) do
      delete :destroy, id: @point
    end

    assert_redirected_to points_path
  end
end
