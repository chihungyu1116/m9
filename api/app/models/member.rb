class Member < ApplicationRecord
  has_many :member_teams
  has_many :teams, through: :member_teams

  has_many :member_roles
  has_many :roles, through: :member_roles

  def add_role role_name
    role = Role.find_by_name role_name
    self.roles << role if self.roles.where(id: role.id).empty?
  end
end
