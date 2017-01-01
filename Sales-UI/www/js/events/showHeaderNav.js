define(['app'], function (App) {
    App.commands.setHandler('showHeaderNav', function () {
        require(['views/headerNav', 'jquery'], function (HeaderNav, $) {
            var headerNavView;
            App.Header.show(headerNavView = new HeaderNav({}));
            headerNavView.listenTo(headerNavView, 'showNav', function() {
                console.log('in event ') ;
//                $('.nav').css('width', '200px');
            });
        });
    });
});