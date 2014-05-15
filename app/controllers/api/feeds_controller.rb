module Api
  class FeedsController < ApplicationController
    def index
      respond_to do |format|
        format.html { render :index }
        format.json { render :json => Feed.all }
      end
    end

    def create
      feed = Feed.find_or_create_by_url(feed_params[:url])
      if feed
        render :json => feed
      else
        render :json => { error: "invalid url" }, status: :unprocessable_entity
      end
    end

    def show
      current_time = Time.now.utc
      @feed = Feed.find(params[:id])
      latest_entry_time = @feed.entries.last.created_at
      if (current_time - latest_entry_time) > 5
        @feed.reload
      end
      render json: @feed, include: :entries
    end

    private
    def feed_params
      params.require(:feed).permit(:title, :url)
    end
  end
end