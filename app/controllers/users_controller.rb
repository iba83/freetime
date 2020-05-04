class UsersController < ApplicationController

  before_action :move_to_index, except: [:index]

  def show
    @user = User.find(params[:id])
    @posts = Post.search_posts(params[:id]).includes(:comments).order(created_at: :desc)
    @group_id = @posts.pluck(:group_id)
    @groups = Group.where(id: @group_id)
    @follows = @user.follows
    @follows_id = @follows.pluck(:follow_id)
    @followUsers = User.where(id: @follows_id)
    # @followId = @follows.pluck(:follow_id)
    # @followUsers = User.where(user_id: @followId)
    # @userGroupPost = Post.where(user_id: params[:id], group_id: 1 )
    # gon.posts = @posts
    # # return nil if params[:input] == " "
    # @co = params[:category].to_i
    # # @category = @posts.where(group_id: @co)  
    # @category = params[:category]
    # respond_to do |format|
    #   format.html
    #   format.json
    # end
  end

  private

  def move_to_index
    redirect_to root_path unless user_signed_in?
  end

end
