define(['backbone', 'config', 'jquery'], function(Backbone, Config, $) {
    var register = Backbone.Model.extend({
        defaults: {
            firstName: '',
            lastName: '',
            mobileNumber: '',
            password: ''
        },
        findByMobileNumber: function(mobileNumber) {
            $.ajax({
                url: Config.path + '/register', 
                param: {
                    mobileNumber: mobileNumber
                }
            }).done(function(data){
                console.log(data);
            });
        },
        url: Config.path + '/register'
    });
    
    return login;
});