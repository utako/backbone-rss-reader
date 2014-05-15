window.NewReader.Models.Feed = Backbone.Model.extend({
  urlRoot: "api/feeds",

  entries: function () {
    if (!this._entries) {
      this._entries = new NewReader.Collections.Entries([], {
        feed: this
      });
    }
    return this._entries;
  },

  parse: function(response) {
    if (response.entries) {
      var entry = new NewReader.Models.Entry();

      this.entries().set(response.entries, { parse: true});
      delete response.entries;
    }

    return response;
  }
});