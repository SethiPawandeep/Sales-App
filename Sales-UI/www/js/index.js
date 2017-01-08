require.config({
    baseUrl: 'js',
    paths: {
        backbone: 'lib/backbone/backbone',
        "backbone.babysitter": 'lib/backbone.babysitter/lib/backbone.babysitter',
        marionette: 'lib/backbone.marionette/lib/backbone.marionette',
        //marionette: 'lib/backbone.marionette/lib/core/backbone.marionette',
        "backbone.radio": 'lib/backbone.radio/src/backbone.radio',
        "backbone.wreqr": 'lib/backbone.wreqr/lib/backbone.wreqr',
        jquery: 'lib/jquery/dist/jquery',
        tpl: 'lib/requirejs-tpl/tpl',
        text: 'lib/text/text',
        underscore: 'lib/underscore/underscore',
        stickit: 'lib/backbone.stickit/backbone.stickit',
        kendo: 'lib/kendo/js'
    },
    tpl: {
        templateSettings: {
            evaluate: /\{\[([\s\S]+?)\]\}/g,
            interpolate: /\{\{([\s\S]+?)\}\}/g,
            escape: /\{\(([\s\S]+?)\)\}/g
        }
    }
});

require(['app', 'events/main', 'stickit'], function (App) {
    App.start();
    App.execute('showHeaderNav');
    App.execute('showLoginPage');
});