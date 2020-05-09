class CommentsController < ApplicationController

  before_action :move_to_login_page
  
  def create
    comment = Comment.create(comment_params)
    redirect_to "/posts/#{comment.post_id}"
  end

  private
  def comment_params
    params.require(:comment).permit(:text).merge(user_id: current_user.id, post_id: params[:post_id])
  end

  def move_to_login_page
    redirect_to new_user_session_path unless user_signed_in?
  end

end
