define(['app'], function(App) {
    App.commands.setHandler('showLoginPage', function() {
        require(['views/login', 'models/login'], function(Login, LoginModel) {
            var login = new LoginModel(),
                user = new LoginModel(),
                loginView;
            App.Main.show(loginView = new Login({
                model: login
            }));
            loginView.listenTo(loginView, 'register', function(){
                console.log('asdfasdfasdfasdfasdf');
                App.execute('showRegisterPage'); 
                console.log('asdfasdfasdfasdfasdf');
            });
  /**/
        }); 
    });
});