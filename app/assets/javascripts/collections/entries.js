window.NewReader.Collections.Entries = Backbone.Collection.extend({
  model: NewReader.Models.Entry,

  url: function () {
    return this.feed.url() + "/entries";
  },

  getOrFetch: function (id) {
    var entries = this;
    var model;
    if (model = this.get(id)) {
      model.fetch();
      return model;
    } else {
      model = new NewReader.Models.Entry({ id: id });
      model.fetch({
        success: function () { feeds.add(model) }
      });
       return model;
    }
  },

});