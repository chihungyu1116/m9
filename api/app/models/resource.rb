class Resource < ApplicationRecord
  has_many :role_resources
  has_many :role, through: :role_resources
end
