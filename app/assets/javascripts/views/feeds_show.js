window.NewReader.Views.FeedsShow = Backbone.View.extend({
  template: JST["feeds/show"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click button.feed-refresh":"refresh"
  },

  render: function () {
    var renderedContent = this.template({
      feed: this.model,
      entries: this.model.entries()
    });
    this.$el.html(renderedContent);
    return this;
  },

  refresh: function (event) {
    event.preventDefault();
    this.model.fetch()
  },

})