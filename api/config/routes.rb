Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'

  # get ':controller/new', to: ':controller/new'


  match 'roles/new', to: 'roles#new', via: [:get]
  resources :roles

  match 'resources/new', to: 'resources#new', via: [:get]
  resources :resources

  match 'teams/new', to: 'team#new', via: [:get]
  match 'teams/add_member', to: 'team#add_member', via: [:post]
  resources :teams

  match 'members/new', to: 'members#new', via: [:get]
  resources :members

  match ':controller(/:action(/:id(.:format)))', via: :all
end
