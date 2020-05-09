class GroupsController < ApplicationController

  before_action :move_to_login_page

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to root_path
    else
      render :new
    end
  end
  
  def show
    @group = Group.find(params[:id])
    @otherGroups = Group.where.not(id: params[:id])
    @posts = Post.where(group_id: params[:id]).order(created_at: :desc)
  end

  private
  def group_params
    params.require(:group).permit(:name)
  end

  def move_to_login_page
    redirect_to new_user_session_path unless user_signed_in?
  end

end
