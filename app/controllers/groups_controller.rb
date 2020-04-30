class GroupsController < ApplicationController

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
  end

  private
  def group_params
    params.require(:group).permit(:name)
  end

end
