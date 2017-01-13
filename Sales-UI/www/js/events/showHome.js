define(['app'], function(App) {
    App.commands.setHandler('showHomePage', function() {
        require(['views/home'], function(Home) {
            var homeView;
            App.Main.show(homeView = new Home({}));
        });
    });
});