define(['marionette', 'jquery', 'tpl!templates/headerNav'], function (Marionette, $, tplHeaderNav) {
    var headerNav = Marionette.ItemView.extend({
        template: tplHeaderNav,
        events: {
            'click span.navbar-lines': 'onNavbarLinesClick'
        },
        onNavbarLinesClick: function (e) {
            console.log('Navbar Lines Clickd ' + e);
/*            this.trigger('showNav');
            e.preventDefault();*/
            $('.nav').css('width', '300px');
            $('.navbar-lines').css('z-index', '-1');

            /*
            Doubt
            Which one is a better practice: 
            a. Writing the above jQuery in view file, or
            b. Writing it in the event file?
            */
        }
    });

    return headerNav;
});