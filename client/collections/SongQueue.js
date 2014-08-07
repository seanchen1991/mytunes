// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if (this.length === 1) {
        this.playFirst();
      }
    });
  },

  dequeue: function(){
    var removed = this.remove(this.at(0));
    console.log(removed);
  },

  playFirst: function(song) {
    this.at(0).play();
  }

});
