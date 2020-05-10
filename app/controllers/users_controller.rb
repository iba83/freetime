class UsersController < ApplicationController

  before_action :move_to_login_page

  def show
    @user = User.find(params[:id])
    @posts = Post.search_posts(params[:id]).includes(:comments).order(created_at: :desc)
    @group_id = @posts.pluck(:group_id)
    @groups = Group.where(id: @group_id)
    @follows_id = @user.follows.pluck(:follow_id)
    @followUsers = User.where(id: @follows_id)
  end

  def category
    @user = User.find(params[:id])
    @posts = Post.search_posts(params[:id]).includes(:comments).order(created_at: :desc)
    @group_id = @posts.pluck(:group_id)
    @groups = Group.where(id: @group_id)
    @follows_id = @user.follows.pluck(:follow_id)
    @followUsers = User.where(id: @follows_id)
    @category = @posts.where(group_id: params[:num])
  end

  private

  def move_to_login_page
    redirect_to new_user_session_path unless user_signed_in?
  end

end
