window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    //alert('Hello from Backbone!');
    new NewReader.Routers.AppRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewReader.initialize();
});