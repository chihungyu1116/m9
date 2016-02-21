class SessionController < BaseController
  def authenticate
    render json: {}
  end

  def login
    session[:user_id] = 'admin'
    render json: {}
  end

  def logout
    session[:user_id] = nil
    render json: {}
  end
end
