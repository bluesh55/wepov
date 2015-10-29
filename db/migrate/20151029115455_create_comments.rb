class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.references :debate, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true
      t.text :content, null: false
      t.references :comment, index: true, foreign_key: true
      t.integer :like_count, default: 0
      t.integer :dislike_count, default: 0
      t.boolean :is_visible, default: true

      t.timestamps null: false
    end
  end
end
