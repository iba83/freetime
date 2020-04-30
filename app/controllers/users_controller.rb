class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    @posts = Post.search_posts(params[:id])
    @group_id = @posts.pluck(:group_id)
    @groups = Group.where(id: @group_id)
  end

end
