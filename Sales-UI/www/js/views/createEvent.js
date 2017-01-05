define(['marionette', 'tpl!templates/createEvent'], function (Marionette, tplCreateEvent) {
    var createEvent = Marionette.ItemView.extend({
        template: tplCreateEvent,
        bindings: {
            'input.eventName': 'eventName',
            'input.eventDescription': 'eventDescription',
            'input.amount': 'amount',
            'input.comission': 'comission'
        },
        events: {
            'click input.create': 'onCreateClick'
        },
        onCreateClick: function(e) {
            console.log('Create clicked.');
            this.trigger('create');
        },
        onRender: function () {
            this.stickit();
        }
    });

    return createEvent;
});