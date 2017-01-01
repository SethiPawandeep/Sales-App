define(['marionette', 'jquery', 'tpl!templates/headerNav'], function (Marionette, $, tplHeaderNav) {
    var headerNav = Marionette.ItemView.extend({
        template: tplHeaderNav,
        events: {
            'click span.navbar-lines': 'onNavbarLinesClick',
            'click .nav a.closeBtn': 'onCloseBtnClick'
        },
        onNavbarLinesClick: function (e) {
            console.log('Navbar Lines Clickd ' + e);
/*            this.trigger('showNav');
            e.preventDefault();*/
            $('.nav').css('width', '300px');
            /*
            Doubt
            Which one is a better practice: 
            a. Writing the above jQuery in view file, or
            b. Writing it in the event file?
            */
        },
        onCloseBtnClick: function(e) {
            $('.nav').css('width', '0');
        }
    });

    return headerNav;
});