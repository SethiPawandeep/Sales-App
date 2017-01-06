define(['app'], function (App) {
    App.commands.setHandler('showHeaderNav', function () {
        require(['views/headerNav', 'jquery'], function (HeaderNav, $) {
            var headerNavView;
            App.Header.show(headerNavView = new HeaderNav({}));
            headerNavView.listenTo(headerNavView, 'showNav', function() {
                console.log('in event ') ;
//                $('.nav').css('width', '200px');
            });
            headerNavView.listenTo(headerNavView, 'openHome', function() {
                App.execute('showLoginPage'); 
            });
            headerNavView.listenTo(headerNavView, 'createEvent', function() {
                console.log('create event triggered BEFORE::');
                App.execute('showCreateEventPage');
                console.log('create event triggered AFRER::');
            });
            headerNavView.listenTo(headerNavView, 'showEvents', function() {
                App.execute('showEventList');
            });
            headerNavView.listenTo(headerNavView, 'showAbout', function() {
                alert('Not implemented yet');
            });
        });
    });
});