define(['app'], function (App) {
    App.commands.setHandler('showRegisterPage', function () {
        require(['views/register', 'models/register'], function(Register, RegisterModel) {
            var user = new RegisterModel(),
                registerView;
            App.Main.show(registerView = new Register({
                model: user
            }));
/**/
        });
    });
});