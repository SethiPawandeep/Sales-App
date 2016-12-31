define(['marionette', 'jquery', 'tpl!templates/headerNav'], function (Marionette, $, tplHeaderNav) {
    var headerNav = Marionette.ItemView.extend({
        template: tplHeaderNav,
        events: {
            'click span.navbar-lines': 'onNavbarLinesClick'
        },
        onNavbarLinesClick: function (e) {
            console.log('Navbar Lines Clickd ' + e);
            $('.nav').style('width', '200px');
        }
    });

    return headerNav;
});