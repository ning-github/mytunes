// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.$el.append('<th>Song Queue</th>');
    this.render();
    console.log("this");
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function() {
    console.log("hi");

    // this.$el.children().detach();
    // fix rendering issues here
    console.log(this.$el);
    this.$el.find('tr').remove();
    this.$el.append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
    }));
    // return this.$el;
  }

  // renderEntry: function(song) {
  //   var entryView = new SongQueueEntryView({model: song});
  //   return entryView.render().html();
  // }

});
