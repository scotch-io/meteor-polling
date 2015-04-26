// attach events to our poll template
Template.poll.events({

  // event to handle clicking a choice
  'click .vote': function(event, template) {

    // prevent the default behavior
    event.preventDefault();
  
    // increment the number of votes for this choice
    this.votes = this.votes + 1;
    console.log(this);

  }

});