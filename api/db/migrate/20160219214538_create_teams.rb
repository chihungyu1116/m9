class CreateTeams < ActiveRecord::Migration[5.0]
  def change
    create_table :teams do |t|
      t.string   "name",          null: false
      t.string   "allowed_roles"
      t.string   "leads"
      t.text     "notes"
      t.timestamps
    end
  end
end
