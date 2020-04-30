class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    @posts = Post.search_posts(params[:id]).includes(:comments)
    @group_id = @posts.pluck(:group_id)
    @groups = Group.where(id: @group_id)
    # @userGroupPost = Post.where(user_id: params[:id], group_id: 1 )
    

  end

end
