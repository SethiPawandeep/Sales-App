define(['app'], function (App) {
    App.commands.setHandler('showLoginPage', function () {
        require(['views/login', 'models/login', 'models/user'], function (Login, LoginModel, UserModel) {
            var login = new LoginModel(),
                user = new UserModel(),
                loginView;
            App.Main.show(loginView = new Login({
                model: login
            }));
            loginView.listenTo(loginView, 'login', function () {
                user.fetch({
                    data: {
                        findByUsername: login.get('username')
                    }
                }).done(function () {
                    if (login.get('password') === user.get('password')) {
                        //Open app home page
                    } else {
                        alert('Invalid credentials');
                        /*
                            1. Develop a way to check if the username exists or not.
                            2. Use something else in place of alert.
                        */

                    }
                }).fail(function () {
                    alert('Error communicating server')
                });
            });
            loginView.listenTo(loginView, 'onRegister', function () {
                App.execute('showRegisterPage');
            });
        });
    });
});