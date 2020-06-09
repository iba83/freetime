class FavoritesController < ApplicationController
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
