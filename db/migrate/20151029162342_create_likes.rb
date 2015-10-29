class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.references :user, index: true, foreign_key: true
      t.references :comment, index: true, foreign_key: true
      t.boolean :is_like

      t.timestamps null: false
    end
    add_index :likes, [:user_id, :comment_id], unique: true
  end
end
