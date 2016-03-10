class RolesController < ApplicationController
  def index
    @roles = Role.all
    render json: @roles
  end

  def create
    @role = Role.create create_params

    resource_params.each do |resource|
      @role.resource << Resource.where(controller: resource[:controller], action: resource[:action]).first
    end

    render json: @role
  end

  def update
    @role = Role.find update_params[:id]
    @role.update_attributes(name: update_params[:name])
    @role.resource.delete_all

    resource_params.each do |resource|
      @role.resource << Resource.where(controller: resource[:controller], action: resource[:action]).first
    end

    render json: @role
  end

  def show
    @role_and_resource = Role.find_role_and_resource params[:id]
    render json: @role_and_resource
  end

  def new
    @role_and_resource = Role.find_role_and_resource
    render json: @role_and_resource
  end

  private

  def create_params
    params.require(:role).permit(:name)
  end

  def resource_params
    params.require(:resources)
  end

  def update_params
    params.require(:role).permit(:id, :name)
  end
end
