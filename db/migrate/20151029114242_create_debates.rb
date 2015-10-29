class CreateDebates < ActiveRecord::Migration
  def change
    create_table :debates do |t|
      t.references :user, index: true, foreign_key: true
      t.string :title, null: false
      t.string :image
      t.text :content
      t.integer :pros_count, default: 0
      t.integer :cons_count, default: 0
      t.integer :priority, default: 1
      t.boolean :is_visible, default: true

      t.timestamps null: false
    end
  end
end
