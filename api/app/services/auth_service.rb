class AuthService
  attr_accessor :pparams, :user, :data

  def initialize(pparams, user)
    @pparams = pparams
    @user = user
    @data = {}
  end

  def perform
    # Todo: check anonymous access
    @data[:is_authorized] = true
  end

  private
end
