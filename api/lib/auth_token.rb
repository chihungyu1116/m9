class AuthToken
  SECRET = 'JERRy iS aWesome'

  # Encode a hash in a json web token
  def self.encode(payload)
    JWT.encode(payload, SECRET)
  end

  # Decode a token and return the payload inside
  # If will throw an error if expired or invalid. See the docs for the JWT gem.
  def self.decode(token, leeway = nil)
    decoded = JWT.decode(token, SECRET, leeway: leeway)
    HashWithIndifferentAccess.new(decoded[0])
  end
end
