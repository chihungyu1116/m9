class CreateMembers < ActiveRecord::Migration[5.0]
  def change
    create_table :members do |t|
      t.string   "name",       null: false
      t.string   "email",      null: false
      t.string   "created_by"
      t.string   "updated_by"
      t.binary   "password"
      t.text     "notes"
      t.timestamps
    end
  end
end
