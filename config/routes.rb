Rails.application.routes.draw do
  devise_for :users
  root "posts#index"
  resources :posts do
    resources :comments, only: :create
    collection do
      get "search"
    end
  end
  resources :groups, only: [:new, :create, :show]
  resources :users, only: [:show]
  namespace :category do
    resources :users, only: :show, defaults: {format: 'json'}
  end
  resources :follows, only: [:create, :destroy]
end
