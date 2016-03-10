class MembersController < ApplicationController
  def lookup
    debugger

    @member = Member.find_by_name params

    render json: {
      member: @member
    }
  end
end
