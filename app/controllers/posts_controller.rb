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
    @groups = Group.all
    @post = Post.new(post_params)
    if @post.save
      redirect_to :root
    else
      flash[:alert] = "送信に失敗しました。"
      render :new
    end
  end

  def show
    @post = Post.find(params[:id])
    @comment = Comment.new
    @comments = Comment.includes(:user)
  end

  private
  def post_params
    params.require(:post).permit(:text, :image, :group_id).merge(user_id: current_user.id)
  end

end
