class UsersController < ApplicationController

  before_action :move_to_login_page

  def show
    @user = User.find(params[:id])
    @posts = Post.search_posts(params[:id]).includes(:comments).order(created_at: :desc)
    @group_id = @posts.pluck(:group_id)
    @groups = Group.where(id: @group_id)
    @follows = @user.follows
    @follows_id = @follows.pluck(:follow_id)
    @followUsers = User.where(id: @follows_id)

    # # return nil if params[:input] == " "
    # @co = params[:category].to_i
    # # @category = @posts.where(group_id: @co)  
    # @category = params[:category]
  end

  def category
    @user = User.find(params[:id])
    @posts = Post.search_posts(params[:id]).includes(:comments).order(created_at: :desc)
    @group_id = @posts.pluck(:group_id)
    @groups = Group.where(id: @group_id)
    @follows = @user.follows
    @follows_id = @follows.pluck(:follow_id)
    @followUsers = User.where(id: @follows_id)
    @category = @posts.where(group_id: params[:num])
  end

  private

  def move_to_login_page
    redirect_to new_user_session_path unless user_signed_in?
  end

end
