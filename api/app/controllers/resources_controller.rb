class ResourcesController < ApplicationController
  def index
    @resources = Resource.all
    render json: @resources
  end

  def create
    @resource = Resource.create create_params
    render json: @resource
  end

  def update
    @resource = Resource.find update_params[:id]
    @resource.update_attributes update_params
    render json: @resource
  end

  def show
    @resource = Resource.find params[:id]
    render json: @resource
  end

  private

  def create_params
    params.require(:resource).permit(:controller, :action)
  end

  def update_params
    params.require(:resource).permit(:id, :controller, :action)
  end
end
