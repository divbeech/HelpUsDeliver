class CreateStores < ActiveRecord::Migration[6.0]
  def change
    create_table :stores do |t|
      t.string :name
      t.string :cart
      t.string :cart_address
      t.string :address
      t.integer :areacode
      t.integer :user_id
      t.integer :helper_id



      t.timestamps
    end
  end
end
