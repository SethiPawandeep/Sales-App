define(['marionette', 'tpl!templates/home'], function (Marionette, tplHome) {
    var home = Marionette.ItemView.extend({
        template: tplHome,
    });

    return home;
});