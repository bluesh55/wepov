class CreatePoints < ActiveRecord::Migration
  def change
    create_table :points do |t|
      t.references :user, index: true, foreign_key: true
      t.references :debate, index: true, foreign_key: true
      t.string :title
      t.integer :priority
      t.boolean :is_visible

      t.timestamps null: false
    end
  end
end
