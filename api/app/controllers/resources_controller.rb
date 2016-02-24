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
    debugger
  end

  private

  def create_params
    params.require(:resource).permit(:controller, :action)
  end
end
