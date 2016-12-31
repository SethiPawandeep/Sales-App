define(['marionette'], function (Marionette) {
    var App = Marionette.Application.extend({
        initialize: function () {
            console.log('Application initialised');
        },
        onStart: function() {
            console.log('Application started');
        },
        regions: {
            Header: 'div.header',
            Main: 'div.main'
        }
    });
    
    return (new App());
});