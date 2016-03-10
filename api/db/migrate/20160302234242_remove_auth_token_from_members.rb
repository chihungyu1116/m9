class RemoveAuthTokenFromMembers < ActiveRecord::Migration[5.0]
  def change
    remove_column :members, :auth_token
  end
end
