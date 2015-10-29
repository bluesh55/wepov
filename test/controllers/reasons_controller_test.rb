require 'test_helper'

class ReasonsControllerTest < ActionController::TestCase
  setup do
    @reason = reasons(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:reasons)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create reason" do
    assert_difference('Reason.count') do
      post :create, reason: { content: @reason.content, is_pros: @reason.is_pros, is_visible: @reason.is_visible, point_id: @reason.point_id, priority: @reason.priority, title: @reason.title, user_id: @reason.user_id }
    end

    assert_redirected_to reason_path(assigns(:reason))
  end

  test "should show reason" do
    get :show, id: @reason
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @reason
    assert_response :success
  end

  test "should update reason" do
    patch :update, id: @reason, reason: { content: @reason.content, is_pros: @reason.is_pros, is_visible: @reason.is_visible, point_id: @reason.point_id, priority: @reason.priority, title: @reason.title, user_id: @reason.user_id }
    assert_redirected_to reason_path(assigns(:reason))
  end

  test "should destroy reason" do
    assert_difference('Reason.count', -1) do
      delete :destroy, id: @reason
    end

    assert_redirected_to reasons_path
  end
end
