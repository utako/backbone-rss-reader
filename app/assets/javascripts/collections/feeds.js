window.NewReader.Collections.Feeds = Backbone.Collection.extend({
  url: "api/feeds",
  model: NewReader.Models.Feed,

  getOrFetch: function (id) {
    var feeds = this;
    var model;
    if (model = this.get(id)) {
      model.fetch();
      return model;
    } else {
      model = new NewReader.Models.Feed({ id: id });
      model.fetch({
        success: function () { feeds.add(model) }
      });
       return model;
    }
  }
});

window.NewReader.Collections.feeds = new NewReader.Collections.Feeds();