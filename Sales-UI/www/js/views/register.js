define(['marionette', 'tpl!templates/register'], function(Marionette, tplRegister) {
    var register = Marionette.ItemView.extend({
        template: tplLogin,
        bindings: {
            'input.firstName': 'firstName',
            'input.lastName': 'lastName',
            'input.mobileNumber': 'mobileNumber',
            'input.password': 'password'
        },
        events: {
            'click input.register': 'onRegister'
        },
        onRegister: function(e) {
            console.log('Register clicked ' + e);
            this.trigger('register');
        }
    });
});