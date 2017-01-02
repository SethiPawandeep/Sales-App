define(['backbone', 'jquery', 'config'], function (Backbone, $, Config) {
    var registerConfirmOTP = Backbone.Model.extend({
        defaults: {
            OTP: ''
        },
        getOTP: function (OTP) {
            $.ajax({
                url: Config.path + '/OTP',
                params: {
                    OTP: OTP
                }
            }).done(function (data) {
                console.log(data);
            });
        },
        url: Config.path + '/OTP'
    });
    
    return registerConfirmOTP;
});