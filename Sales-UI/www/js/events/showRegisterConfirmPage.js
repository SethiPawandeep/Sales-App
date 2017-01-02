define(['app'], function (App) {
    App.commands.setHandler('showConfirmPage', function (register) {
        require(['views/registerConfirm', 'models/registerConfirmOTP'], function (RegisterConfirm, RegisterConfirmOTPModel) {
            var registerConfirmOTP = new RegisterConfirmOTPModel(),
                OTP = new RegisterConfirmOTPModel(),
                registerConfirmView;
            App.Main.show(registerConfirmView = new RegisterConfirm({
                model: registerConfirmOTP
            }));
            registerConfirmView.listenTo(registerConfirmView, 'confirm', function () {
                OTP.fetch({
                    /*
                    Get OTP from the server
                    */
                }).done(function () {
                    if (OTP.get('OTP') === registerConfirmOTP.get('OTP')) {
                        console.log('Triggered');
                        register.save();
                        App.execute('showHome');
                    }
                }).fail(function () {
                    console.log('Invalid af.');
                });
            });
        });
    });
});