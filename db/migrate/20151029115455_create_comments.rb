class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.references :debate, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true
      t.text :content
      t.references :comment, index: true, foreign_key: true
      t.integer :like_count
      t.integer :dislike_count
      t.boolean :is_visible

      t.timestamps null: false
    end
  end
end
