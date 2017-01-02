define(['app'], function (App) {
    App.commands.setHandler('showRegisterPage', function () {
        require(['views/register', 'models/register', 'models/user'], function (Register, RegisterModel, UserModel) {
            var user = new UserModel(),
                register = new RegisterModel(),
                registerView;
            App.Main.show(registerView = new Register({
                model: register
            }));
            registerView.listenTo(registerView, 'register', function () {
                user.fetch({
                    data: {
                        findByMobileNumber: register.get('phoneNumber')
                    }
                }).done(function () {
                    if (register.get('phoneNumber') === user.get('phoneNumber') || register.get('emailId') === user.get('emailId')) {
                        alert('User with the entered credentials already exists\n');
                        //User already exists
                    } else {
                        App.execute('setUsernameAndConfirm', register);
                    }
                }).fail(function(){
                    alert('Error communication server.');
                });
            });
            /**/
        });
    });
});