define(['marionette', 'jquery', 'tpl!templates/headerNav'], function (Marionette, $, tplHeaderNav) {
    var headerNav = Marionette.ItemView.extend({
        template: tplHeaderNav,
        ui: {
            homeLink: 'a.homeLink',
            createEventLink: 'a.createEventLink',
            listEventsLink: 'a.listEventsLink',
            aboutLink: 'a.aboutLink'
        },
        events: {
            'click span.navbar-lines': 'onNavbarLinesClick',
            'click .nav a.closeBtn': 'onCloseBtnClick',
            'click @ui.homeLink': 'openHome',
            'click @ui.createEventLink': 'openCreateEventPage',
            'click @ui.listEventLink': 'openEvents',
            'click @ui.aboutLink': 'openAbout'
        },
        openHome: function(e) {
            this.trigger('openHome');
            $('.nav').css('left', '-300px');
            $('.nav').scrollTop(0);
            e.preventDefault();
        },
        openCreateEventPage: function(e) {
            this.trigger('createEvent');
            $('.nav').css('left', '-300px');
            e.preventDefault();
        },
        openEvents: function(e) {
            this.trigger('showEvents');
            $('.nav').css('left', '-300px');
            e.preventDefault();
        },
        openAbout: function(e) {
            this.trigger('showAbout');
            $('.nav').css('left', '-300px');
            e.preventDefault();
        },        
        onNavbarLinesClick: function (e) {
            console.log('Navbar Lines Clickd ' + e);
            /*            this.trigger('showNav');
                        e.preventDefault();*/
            $('.nav').css('left', '0');
            /*
            Doubt
            Which one is a better practice: 
            a. Writing the above jQuery in view file, or
            b. Writing it in the event file?
            */
        },
        onCloseBtnClick: function (e) {
            $('.nav').css('left', '-300px');
        }
    });

    return headerNav;
});