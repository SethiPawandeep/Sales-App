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
            'click @ui.registerLink': 'onRegister'
        },
        onLogin: function (e) {
            console.log('Login clicked ' + e);
            this.trigger('login');
        },
        onRegister: function(e) {
            console.log('Register link clicked ' + e);
            this.trigger('onRegister');
        },
        onRender: function() {
            this.stickit();
        }
    });

    return login;
});