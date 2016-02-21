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
    authenticate_token || render_unauthorized
  end

  def authenticate_token
    authenticate_with_http_token do |token, options|
      puts ('token: ' + token)
      Member.find_by(auth_token: token)
    end
  end

  def render_unauthorized
    self.headers['WWW-Authenticate'] = 'Token realm="Application"'
    render json: 'Bad credentials', status: :unauthorized
  end
end
