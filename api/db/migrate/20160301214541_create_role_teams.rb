class CreateRoleTeams < ActiveRecord::Migration[5.0]
  def change
    create_table :role_teams do |t|
      t.integer  "role_id"
      t.integer  "team_id"
      t.timestamps
    end

    remove_column :teams, :allowed_roles
  end
end
