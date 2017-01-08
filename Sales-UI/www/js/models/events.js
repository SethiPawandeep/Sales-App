define(['backbone', 'config'], function(Backbone, Config) {
    var eventModel = Backbone.Model.extend({
        defaults: {
            eventName: '',
            eventHost: '',
            eventAmount: '',
            eventDescription: '',
            eventComission: ''
        }
    });
    
    var eventModelCollection = Backbone.Collection.extend({
        model: eventModel,
        url: Config.path + '/events'
    });
    
    return eventModelCollection;
});