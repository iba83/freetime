Rails.application.routes.draw do
  devise_for :users
  root "posts#index"
  resources :posts, only: [:new, :create, :show] do
    resources :comments
  end
  resources :groups, only: [:new, :create, :show]
  resources :users, only: [:show]
end
