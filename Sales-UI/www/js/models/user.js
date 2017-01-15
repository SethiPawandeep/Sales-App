define(['backbone', 'config', 'jquery'], function (Backbone, Config, $) {
    var user = Backbone.Model.extend({
        defaults: {
            firstName: '',
            lastName: '',
            username: 'asdf',
            password: '',
            mobileNumber: '',
            userEmail: ''
        },
        findByMobileNumber: function () {
            $.ajax({
                url: Config.path + '/user',
                param: {
                    mobileNumber: mobileNumber
                }
            }).done(function (data) {
                console.log('findByMobileNumber ' + data);
            });
        },
        findByUsername: function () {
            $.ajax({
                url: Config.path + '/user',
                param: {
                    username: username
                }
            }).done(function (data) {
                console.log('findByUsername ' + data);
            });
        },
        findByEmailId: function () {
            $.ajax({
                url: Config.path + '/user',
                param: {
                    emailId: emailId
                }
            }).done(function (data) {
                console.log('findByEmailId ' + data);
            });
        },
        url: Config.path + '/user'

    });

    return user;
});