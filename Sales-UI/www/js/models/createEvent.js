define(['backbone', 'config'], function (Backbone, Config) {
    var createEvent = Backbone.Model.extend({
        defaults: {
            eventName: '',
            eventDescription: '',
            amount: '',
            comission: '',
            username: '',
            
        },
        url: Config.path + '/create'
    });

    return createEvent;
});