class CreateOrdernumbers < ActiveRecord::Migration[6.0]
  def change
    create_table :ordernumbers do |t|
      t.integer :store_id
      t.integer :user_id
      t.integer :helper_id

      t.timestamps
    end
  end
end
