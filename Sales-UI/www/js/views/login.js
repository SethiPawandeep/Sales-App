define(['marionette', 'tpl!templates/login'], function (Marionette, tplLogin) {
    var login = Marionette.ItemView.extend({
        template: tplLogin,
        bindings: {
            'input.username': 'username',
            'input.password': 'password'
        },
        ui: {
            registerLink: 'a.registerLink'
        },
        events: {
            'click input.login': 'onLogin',
            'click @ui.registerLink': 'onRegisterLinkClick'
        },
        onLogin: function (e) {
            console.log('Login clicked ' + e);
            this.trigger('login');
        },
        onRegisterLinkClick: function(e) {
            console.log('Register link clicked ' + e);
            this.trigger('register');
        }
    });

    return login;
});