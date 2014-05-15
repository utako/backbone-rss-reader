NewReader::Application.routes.draw do
  root to: "site#root"
  namespace :api, defaults: { format: :json } do
    resources :feeds, only: [:index, :create, :show] do
      resources :entries, only: [:index]
    end
    resources :entries, only: [:show]
  end

end
