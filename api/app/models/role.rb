class Role < ApplicationRecord
  has_many :role_resources
  has_many :resource, through: :role_resources

  def self.find_role_and_resource id = nil
    resources = Resource.all

    if id.nil?
      return {
        role: {},
        role_resources: [],
        resources: resources
      }
    end

    role = Role.find id

    return {
      role: role,
      role_resources: role.resource,
      resources: resources
    }
  end
end
