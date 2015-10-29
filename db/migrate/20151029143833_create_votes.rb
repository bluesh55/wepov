class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.references :user, index: true, foreign_key: true
      t.references :debate, index: true, foreign_key: true
      t.boolean :is_pros

      t.timestamps null: false
    end
    add_index :votes, [:user_id, :debate_id], unique: true
  end
end
