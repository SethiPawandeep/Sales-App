define(['app'], function (App) {
    App.commands.setHandler('showEventList', function () {
        require(['views/eventList', 'models/events'], function (EventList, EventCollection) {
            var events = new EventCollection(),
                eventListView;
            events.fetch();
            App.Main.show(eventListView = new EventList({
                model: events
            }));
        });
    });
});