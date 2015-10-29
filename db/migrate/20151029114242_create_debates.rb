class CreateDebates < ActiveRecord::Migration
  def change
    create_table :debates do |t|
      t.references :user, index: true, foreign_key: true
      t.string :title
      t.string :image
      t.text :content
      t.integer :pros_count
      t.integer :cons_count
      t.integer :priority
      t.boolean :is_visible

      t.timestamps null: false
    end
  end
end
