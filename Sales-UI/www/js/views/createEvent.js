define(['marionette', 'tpl!templates/createEvent', 'kendo/kendo.maskedTextBox'], function (Marionette, tplCreateEvent) {
    var createEvent = Marionette.ItemView.extend({
        template: tplCreateEvent,
        bindings: {
            'input.eventName': 'eventName',
            'input.eventDescription': 'eventDescription',
            'input.amount': 'amount',
            'input.comission': 'comission'
        },
        ui: {
            amount: 'input.amount',
            comission: 'input.comission'
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
            this.ui.amount.kendoMaskedTextBox({
                mask: '₹ 0000/-',
                clearPromptChar: true
            });
        }
    });

    return createEvent;
});