// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
    this.collection.bind('add', this.appendSong, this);
    this.collection.bind('remove', this.render, this);
  },

  appendSong: function(song) {
    this.$el.append(new SongQueueEntryView({model: song}).render());
    this.playSong();
  },

  playSong: function() {
    if (this.collection.length === 1) {
      this.collection.at(0).play();
    };
  },

  render: function() {
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
