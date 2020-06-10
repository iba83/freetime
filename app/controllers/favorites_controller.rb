class FavoritesController < ApplicationController

  def index
    favorite = Favorite.where(user_id: params[:format]).pluck(:post_id)
    @posts = Post.where(id: favorite).order(created_at: :desc)
    @user = User.find(params[:format])
    posts = Post.search_posts(params[:id]).includes(:comments).order(created_at: :desc)
    @group_id = posts.pluck(:group_id)
    @groups = Group.where(id: @group_id)
    @follows_id = @user.follows.pluck(:follow_id)
    @followUsers = User.where(id: @follows_id)
    @category = @posts.where(group_id: params[:num])
  end

  def create
    favorite = current_user.favorites.build(post_id: params[:post_id])
    favorite.save!
    redirect_back(fallback_location: root_path)
  end

  def destroy
    current_user.favorites.find_by(post_id: params[:post_id]).destroy!
    redirect_back(fallback_location: root_path)
  end

end
