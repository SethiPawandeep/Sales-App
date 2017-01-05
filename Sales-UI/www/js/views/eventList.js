define(['marionette', 'tpl!/templates/event'], function (Marionette, tplEvent) {
    var eventListChild = Marionette.ItemView.extend({
        template: tplEvent,
        events: {
            'click a.eventLink': 'onEventLinkClick',
            'click button.enroll': 'onEnrollClick',
            'click button.sell': 'onSellClick'
        },
        onEventLinkClick: function (e) {
            console.log(e + 'clicked');
            //trigger event for that 
        },
        onSellClick: function (e) {
            console.log('onSellClick ' + e);
            //handel this event
        },
        onEnrollClick: function (e) {
            console.log('onEnrollClick ' + e);
            //handel this event
        }
    });

    var eventList = Marionette.CollectionView.extend({
        childView: eventListChild,
        className: 'show-at-middle'
    });

    return eventList;
});