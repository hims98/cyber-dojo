
class ReverterController < ApplicationController

  def revert
	tag = params[:tag]
	avatar = dojo.katas[id].avatars[params[:avatar]]
	render :json => {
      :visibleFiles => avatar.tags[tag].visible_files,
	  :light => avatar.tags[tag].light
	}
  end

end
