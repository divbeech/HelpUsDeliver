class CreateHelpers < ActiveRecord::Migration[6.0]
  def change
    create_table :helpers do |t|
      t.string :name
      t.string :age
      t.string :adreess
      t.integer :areacode
      t.string :bio
      t.string :email
      t.string :password_digest
      t.timestamps
    end
  end
end
