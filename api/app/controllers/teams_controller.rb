class TeamsController < ApplicationController
  def index
    @teams = Team.all

    render json: {
      teams: @teams
    }
  end

  def new
    @team = Team.new
    @users = Member.all
    @roles = Role.all

    render json: {
      team: @team,
      team_roles: [],
      team_members: [],
      users: @users,
      roles: @roles
    }
  end

  def show
    @team = Team.find params[:id]
    @users = Member.all
    @roles = Role.all

    render json: {
      team: @team,
      team_roles: @team.role,
      team_members: @team.member,
      users: @users,
      roles: @roles
    }
  end

  def create
    @team = Team.create create_params

    team_member_params.each do |team_member|
      @team.member << Member.find(team_member.id)
    end

    render json: @team
  end

  def update
    @team = Team.find update_params[:id]
    @team.update_attributes(update_params)
    @team.role = Role.where(['id in (?)', params[:teamRoles].map{|role| role[:id]}])

    # member_names = params[:teamMembers].split(',').map(&:strip).uniq
    # members = Member.where(['name in (?)', member_names])
    # @team.member = members

    # if members.size != member_names
    #   new_member_names = member_names - members.map(&:name)
    #   new_member_names.each do |new_member_name|
    #     Member.create({
    #                     name: new_member_name,
    #                     email: '',
    #                     created_by: 'system',
    #                     updated_at: Time.now
    #     })
    #   end

    #   debugger
    # end

    # @team.member = Member.where(['name in (?)', params[:teamMembers].split(',').map(&:strip)])

    render json: @team
  end

  def add_member
    render json: params
  end

  private

  def create_params
    params.require(:team).permit(:name, :leads, :notes)
  end

  def team_member_params
    params.require(:team).permit(:members)
  end

  def update_params
    params.require(:team).permit(:id, :name, :leads, :notes)
  end
end
