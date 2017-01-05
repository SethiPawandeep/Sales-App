define(['app'], function (App) {
    App.commands.setHandler('createEvent', function () {
        require(['views/createEvent', 'models/createEvent'], function (CreateEvent, CreateEventModel) {
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