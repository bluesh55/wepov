class CreatePoints < ActiveRecord::Migration
  def change
    create_table :points do |t|
      t.references :user, index: true, foreign_key: true
      t.references :debate, index: true, foreign_key: true
      t.string :title, null: false
      t.integer :priority, default: 1
      t.boolean :is_visible, default: true

      t.timestamps null: false
    end
  end
end
