Rails.application.routes.draw do
  devise_for :users
  root "posts#index"
  resources :posts, only: [:new, :create]
  resources :groups, only: [:new, :create, :show]
end
