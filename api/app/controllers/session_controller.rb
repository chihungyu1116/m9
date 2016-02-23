class SessionController < BaseController
  def authenticate
    render json: {}
  end

  def user
    @member = Member.find(decoded_auth_token[:user_id])

    render json: @member.public_info
  end

  def login
    @member = Member.first

    render json: @member.public_info
  end

  def logout
    render json: {
      auth_token: nil
    }
  end
end
