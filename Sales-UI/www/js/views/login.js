define(['marionette', 'tpl!templates/login'], function (Marionette, tplLogin) {
    var login = Marionette.ItemView.extend({
        template: tplLogin,
        bindings: {
            'input.username': 'username',
            'input.password': 'password'
        },
        events: {
            'click input.login': 'onLogin'
        },
        onLogin: function (e) {
            console.log('Login clicked ' + e);
            this.trigger('login');
        }
    });

    return login;
});