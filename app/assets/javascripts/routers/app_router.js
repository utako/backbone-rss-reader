window.NewReader.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "feedsIndex",
    "feeds/:id": "feedsShow",
    "entries/:id": "entriesShow",
  },

  feedsIndex: function () {
    var indexView = new NewReader.Views.FeedsIndex({
      collection: NewReader.Collections.feeds
    });
    NewReader.Collections.feeds.fetch();
    this._swapView(indexView);
  },

  feedsShow: function (id) {
    var feed = NewReader.Collections.feeds.getOrFetch(id);
    var showView = new NewReader.Views.FeedsShow({
      model: feed
    });

    this._swapView(showView);
  },

  entriesShow: function(id) {

    var entry = new NewReader.Models.Entry({id: id});
    entry.fetch();
    var showView = new NewReader.Views.EntriesShow({
      model: entry
    });

    this._swapView(showView);
  },

  _swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;

    $("#content").html(view.render().$el);
  }

});