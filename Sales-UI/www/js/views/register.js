define(['marionette', 'tpl!templates/register', 'kendo/kendo.maskedtextbox'], function(Marionette, tplRegister) {
    var register = Marionette.ItemView.extend({
        template: tplRegister,
        bindings: {
            'input.firstName': 'firstName',
            'input.lastName': 'lastName',
            'input.mobileNumber': 'mobileNumber',
            'input.password-register': 'password-register'
        },
        ui: {
            mobileNumber: 'input.mobileNumber'  
        },
        events: {
            'click input.register': 'onRegister'
        },
        onRegister: function(e) {
            console.log('Register clicked ' + e);
            this.trigger('register');
        },
        onRender: function() {
            this.stickit();
            this.ui.mobileNumber.kendoMaskedTextBox({
                mask: '(000) 000-0000',
                clearPromptChar: true
            });
        }
    });
    
    return register;
});