class CreateReasons < ActiveRecord::Migration
  def change
    create_table :reasons do |t|
      t.references :user, index: true, foreign_key: true
      t.references :point, index: true, foreign_key: true
      t.boolean :is_pros
      t.string :title
      t.text :content
      t.integer :priority
      t.boolean :is_visible

      t.timestamps null: false
    end
  end
end
