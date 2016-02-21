class TeamController < BaseController

  def index
    @teams = Team.all
    render json: @teams
  end

  def new
    @team = Team.new
    render json: @team
  end

  def edit
    @team = Team.find params[:id]
    render json: @team.to_json(include: {member: {include: :roles}})
  end

end
