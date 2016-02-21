class CreateResources < ActiveRecord::Migration[5.0]
  def change
    create_table :resources do |t|
      t.string   "controller", null: false
      t.string   "action"
      t.timestamps
    end
  end
end
