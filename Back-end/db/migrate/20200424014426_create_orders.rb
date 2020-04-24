class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.references :user, null: false, foreign_key: true
      t.references :stores, null: false, foreign_key: true
      t.references :helpers, null: false, foreign_key: true

      t.timestamps
    end
  end
end
