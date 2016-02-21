class AddAuthTokenToMembers < ActiveRecord::Migration[5.0]
  def change
    add_column :members, :auth_token, :string, index: true, null: false
  end
end
