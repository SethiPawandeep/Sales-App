define(['marionette', 'tpl!templates/registerConfirm'], function(Marionette, tplRegisterConfirm) {
    var registerConfirm = Marionette.ItemView.extend({
        template: tplRegisterConfirm,
        bindings: {
            'input.OTP': 'OTP'
        },
        events: {
            'click input.confirm': 'onConfirm'
        },
        onConfirm: function(e) {
            console.log('Confirm clicked ' + e);
            this.trigger('coinfirm');
        }
    });
    
    return registerConfirm;
});