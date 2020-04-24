class Order < ApplicationRecord
  belongs_to :user
  belongs_to :stores
  belongs_to :helpers
end
