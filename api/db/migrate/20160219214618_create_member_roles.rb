class CreateMemberRoles < ActiveRecord::Migration[5.0]
  def change
    create_table :member_roles do |t|
      t.integer  "member_id"
      t.integer  "role_id"
      t.timestamps
    end
  end
end
