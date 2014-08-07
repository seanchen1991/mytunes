// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function() {
    this.render();
  },

  events: {
    'click': function() {
      this.model.clear();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.toJSON()));
  }
});
