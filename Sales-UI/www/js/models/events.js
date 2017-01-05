define(['backbone', 'config'], function(Backbone, Config) {
    var eventModel = Backbone.Model.extend({
        defaults: {
            
        } 
    });
    
    var eventModelCollection = Backbone.Collection.extend({
        model: eventModel,
        url: Config.path + '/events'
    });
    
    return eventModelCollection;
});