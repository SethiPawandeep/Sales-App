define(['app'], function (App) {
    console.log('yahan par');
    App.commands.setHandler('showCreateEventPage', function () {
        console.log('yahan par')
        require(['views/createEvent', 'models/createEvent'], function (CreateEvent, CreateEventModel) {
            console.log('in create event event');
            var event = new CreateEventModel(),
                createEventView;
            App.Main.show(createEventView = new CreateEvent({
                model: event
            }));
            createEventView.listenTo(createEventView, 'create', function () {
                event.save();
            }).done(function () {
                console.log('Event created successfully');
            }).fail(function () {
                console.log('Error communicating server.');
            });
        });
    });
});