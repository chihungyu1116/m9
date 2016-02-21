class BaseController < ActionController::API
  before_action :auth, except: [:login, :logout]

  def current_tenant
    session[:tenant]
  end

  def current_user
    user_name = session[:user_name]
    return nil if !user_name
    @user ||= Member.find_by_name(user_name)
  end

  protected

  def auth

    authenticate_or_request_with_http_token do |token, options|
      Member.find_by(auth_token: token)
    end
    render json: {}, status: :unauthorized
  end
end
