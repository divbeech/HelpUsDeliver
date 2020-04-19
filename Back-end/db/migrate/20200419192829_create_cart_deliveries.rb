class CreateCartDeliveries < ActiveRecord::Migration[6.0]
  def change
    create_table :cart_deliveries do |t|
      t.integer :user_id
      t.integer :store_id
      t.integer :order_id

      t.timestamps
    end
  end
end
