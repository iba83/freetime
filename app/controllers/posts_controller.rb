class PostsController < ApplicationController

  before_action :move_to_login_page, except: [:index]

  def index
    @posts = Post.includes(:group).order(created_at: :desc)
    @groups = Group.all
    @rank = Group.where(id: Post.rank_group_id)
    @fRank = Post.find(Favorite.group(:post_id).order("count(post_id) desc").limit(5).pluck(:post_id))
  end

  def new
    @post = Post.new
    5.times { @post.images.build }
    @groups = Group.all
  end

  def create
    @groups = Group.all
    @post = Post.new(post_params)
    if @post.save
      redirect_to root_path
    else
      render :new
    end
  end

  def show
    @post = Post.find(params[:id])
    @comment = Comment.new
    @comments = Comment.includes(:user).where(post_id: params[:id])
  end

  def edit
    @post = Post.find(params[:id])
    @groups = Group.all
  end

  def update
    post = Post.find(params[:id])
    if post.update(post_params)
      redirect_to :root
    else
      render :edit
    end
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    redirect_back(fallback_location: group_path)
  end

  def search
    @searchPosts = Post.search(params[:keyword])
    @searchUsers = User.search(params[:keyword])
    @searchGroups = Group.search(params[:keyword])
  end

  private
  def post_params
    params.require(:post).permit(
      :text,
      :group_id,
      images_attributes: [:image]
    ).merge(user_id: current_user.id)
  end

  def move_to_login_page
    redirect_to new_user_session_path unless user_signed_in?
  end

end
