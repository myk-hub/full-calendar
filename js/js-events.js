$('.choose-date img').click(function(){
    $('html').css('padding-right','15px');
    $('#modal-app').addClass('modal-visible');
    $('#modal-app').find('#calendar').addClass('modal-slide');
    $('#modal-app').css('overflow','scroll');
    $('section, nav').css('filter','blur(7px)');
    $('body').css({
        'height': '100%',
        'overflow-y': 'hidden'
    });
});

var date = new Date();
var d = date.getDate();
var m = date.getMonth();
var y = date.getFullYear();
var crownImage = '<img src="img/calendar-crown.png">';
var bulletImage = '<img src="img/calendar-bullet.png">';

var events = [
    {
        id:1,
        title: 'Практичне використання інноваційних мезотерапевтичних препаратів МЕЗОТІК',
        start:  new Date(2017, 3, 23, 10, 30),
        className: "premium-event"
    },
    {
        id:2 ,
        title: 'Практичне використання інноваційних мезотерапевтичних препаратів МЕЗОТІК',
        start:  new Date(2017, 3, 25, 10, 43)
    },
    {
        id:3,
        title: 'Практичне використання інноваційних мезотерапевтичних препаратів МЕЗОТІК',
        start:  new Date(2017, 3, 12, 10, 30),
        link: 'www.google.com',
        premium: 'Мезотік препаратів мезотерапевтичних інноваційних використання практичне',
        startPremium:  new Date(2017, 3, 12, 10, 45),
        linkPremium: 'www.google.com',
        imageCrown : crownImage,
        imageBullet : bulletImage,
        className: "calendar-info"

    },
    {
        id:4,
        title: 'Практичне використання інноваційних мезотерапевтичних препаратів МЕЗОТІК',
        start:  new Date(2017, 3, 7, 10, 30),
        link: 'www.google.com',
        premium: 'Мезотік препаратів мезотерапевтичних інноваційних використання практичне',
        startPremium:  new Date(2017, 3, 12, 10, 45),
        linkPremium: 'www.google.com',
        imageCrown : crownImage,
        imageBullet : bulletImage,
        className: "calendar-info"

    },
    {
        id:5,
        title: 'Практичне використання інноваційних мезотерапевтичних препаратів МЕЗОТІК',
        start:  new Date(2017, 4, 23, 10, 30),
        link: 'www.google.com',
        premium: 'Мезотік препаратів мезотерапевтичних інноваційних використання практичне',
        startPremium:  new Date(2017, 3, 12, 10, 45),
        linkPremium: 'www.google.com',
        imageCrown : crownImage,
        imageBullet : bulletImage,
        className: "calendar-info"

    },
    {
        id:6,
        title: 'Практичне використання інноваційних мезотерапевтичних препаратів МЕЗОТІК',
        start:  new Date(2017, 4, 3, 10, 30),
        link: 'www.google.com',
        premium: 'Мезотік препаратів мезотерапевтичних інноваційних використання практичне',
        startPremium:  new Date(2017, 3, 12, 10, 45),
        linkPremium: 'www.google.com',
        imageCrown : crownImage,
        imageBullet : bulletImage,
        className: "calendar-info"

    },
    {
        id:7,
        title: 'Практичне використання інноваційних мезотерапевтичних препаратів МЕЗОТІК',
        start:  new Date(2017, 3, 10, 10, 30),
        link: 'www.google.com',
        premium: 'Мезотік препаратів мезотерапевтичних інноваційних використання практичне',
        startPremium:  new Date(2017, 3, 12, 10, 45),
        linkPremium: 'www.google.com',
        imageCrown : crownImage,
        imageBullet : bulletImage,
        className: "calendar-info"

    },
    {
        id:7,
        title: 'Практичне використання інноваційних мезотерапевтичних препаратів МЕЗОТІК',
        start:  new Date(2017, 3, 2, 10, 30),
        link: 'www.google.com',
        premium: 'Мезотік препаратів мезотерапевтичних інноваційних використання практичне',
        startPremium:  new Date(2017, 3, 12, 10, 45),
        linkPremium: 'www.google.com',
        imageCrown : crownImage,
        imageBullet : bulletImage,
        className: "calendar-info"

    }
];

$('#calendar').fullCalendar({
    lang: 'uk',
    dayNamesShort: ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця" , 'Субота'],
    events:events,
    eventRender: function(event, element, calEvent) {
        if($(element).hasClass('calendar-info')) {
            element.qtip({
                style: {
                    // classes: 'qtipClass'
                    classes: 'fixed'
                },
                position: {
                    my: 'bottom center',
                    at: 'top center',
                    adjust: {
                        x: 70,
                        y: 1
                    },
                    viewport: $(window)

                },
                content: event.imageBullet + '<span>' + ($.fullCalendar.formatDate(event.start, 'hh:mm')) + '</span>' + '<br>' +
                '<a href=' + event.link + '>' + '<p>' + event.title + '</p>' + '</a>' + event.imageCrown + '<span>' +
                ($.fullCalendar.formatDate(event.start, 'hh:mm')) + '</span>' +' <a href=' + event.link + '>' + '<br>' +
                '<p>' + event.title + '</p>' + '</a>',

                hide: {
                    fixed: true,
                    delay: 150
                }
            }); // Виводить поп-ап вікно з інфою
            element.find(".fc-content").after($("<span class='fc-event-icons'></span>").html("<img src='img/calendar-bullet.png'/> <img src='img/calendar-crown.png'/>"));// Додає іконки до події
        }
    }
});

$('.fc-toolbar .fc-right').before('<div class="close-modal"> <span></span> <span></span> </div>');

$('.calendar-button-next').click(function(){
    $('#calendar').fullCalendar('next');
})
$('.calendar-button-prev').click(function(){
    $('#calendar').fullCalendar('prev');
})

$('.close-modal').click(function(){
    $('html').css('padding-right','0px');
    $('#modal-app').find('#calendar').removeClass('modal-slide');
    $('#modal-app').removeClass('modal-visible');
    $('#modal-app').css('overflow','hidden');
    $('section, nav, footer').css('filter','blur(0px)');
    $('body').css({
        'height': '100%',
        'overflow-y': 'scroll'
    });
});
