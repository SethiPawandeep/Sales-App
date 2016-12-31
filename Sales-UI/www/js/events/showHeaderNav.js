define(['app'], function (App) {
    App.commands.setHandler('showHeaderNav', function () {
        require(['views/headerNav'], function (HeaderNavView) {
            var headerNavView;
            App.Header.show(headerNavView = new HeaderNavView({}));
        });
    });
});