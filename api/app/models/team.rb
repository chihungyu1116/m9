class Team < ApplicationRecord
  has_many :member_teams
  has_many :member, through: :member_teams

  has_many :role_teams
  has_many :role, through: :role_teams

  def add_member member_name
    member = Member.find_by_name member_name
    self.member << member if self.member.where(id: member.id).empty?
  end

  def self.team_member_role_relation id
    Team.where(id: id).includes(member: [:roles]).first
  end
end
