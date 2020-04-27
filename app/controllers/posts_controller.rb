class PostsController < ApplicationController

  def index
    @posts = Post.includes(:user).order(created_at: :desc)
    @groups = Group.all
  end

  def new
    @post = Post.new
    @groups = Group.all
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to :root
    else
      render :new
    end
  end

  private
  def post_params
    params.require(:post).permit(:text, :image, :group_id).merge(user_id: current_user.id)
  end

end
