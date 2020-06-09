Rails.application.routes.draw do
  get 'favorites/create'
  get 'favorites/destroy'
  devise_for :users
  root "posts#index"
  resources :posts, shallow: true do
    resource :favorites, only: %i[create destroy]
    get :favorites, on: :collection
    resources :comments, only: :create
    collection do
      get "search"
    end
  end
  resources :groups, only: [:new, :create, :show]
  resources :users, only: [:show] do
    member do
      get "category"
    end
  end
  
  resources :follows, only: [:create, :destroy]
end
