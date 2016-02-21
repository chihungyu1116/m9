class SessionController < BaseController
  def authenticate
    render json: {}
  end

  def login
    @user = Member.first

    render json: {
      auth_token: @user.auth_token
    }
  end

  def logout
    render json: {
      auth_token: nil
    }
  end
end
