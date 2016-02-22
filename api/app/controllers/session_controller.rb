class SessionController < BaseController
  def authenticate
    render json: {}
  end

  def login
    @user = Member.first

    render json: {
      auth_token: AuthToken.encode(user_id: @user.id)
    }
  end

  def logout
    render json: {
      auth_token: nil
    }
  end
end
