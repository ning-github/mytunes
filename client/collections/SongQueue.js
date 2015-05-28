// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

  },


  playFirst: function(){
    this.model[0].play();
  }

});
