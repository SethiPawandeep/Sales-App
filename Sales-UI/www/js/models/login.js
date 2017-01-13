define(['backbone', 'config', 'jquery'], function (Backbone, Config, $) {
    var login = Backbone.Model.extend({
        defaults: {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            mobileNumber: '',
            userEmail: ''
        },
        findByUsername: function (username) {
            $.ajax({
                url: Config.path + '/login',
                param: {
                    username: username
                }
            }).done(function (data) {
                console.log(data);
            });
        },
        url: Config.path + '/login'
    });
    
    return login;
});