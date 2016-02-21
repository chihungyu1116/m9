class Role < ApplicationRecord
  has_many :role_resources
  has_many :resource, through: :role_resources
end
