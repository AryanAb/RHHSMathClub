$(document).ready(function () {
    $(".nav-item").find("a").click(function (e) {
        e.preventDefault();
        $('.navbar-collapse').collapse('hide');
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top - 87
        }, 1000); // the number is the speed that determines how fast it should scroll
    });

    var currentPage = 1;

    $(".page-item").find("a").click(function (e) {
        e.preventDefault();
        const numOfPages = 2;
        for (var i = 1; i <= numOfPages; i++) {
            $("#" + i).fadeOut(800)
        }

        if ($(this).attr("href") === "#next") {
            $("#" + (currentPage + 1)).delay(750).fadeIn(800);
            currentPage++;
        } else if ($(this).attr("href") === "#previous") {
            $("#" + (currentPage - 1)).delay(750).fadeIn(800);
            currentPage--;
        } else {
            $($(this).attr("href")).delay(750).fadeIn(800); //800 is the speed of fade in and fade out. Set the delay to a number slightly less than the speed
            currentPage = parseInt(($(this).attr("href")).substring(1));
        }
    });
});


// Calendar
document.addEventListener('DOMContentLoaded', () => {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid', 'interaction'],
        events: [
            {
                title: 'Meeting',
                daysOfWeek: [4],
                startRecur: '2020-02-06',
                endRecur: '2020-02-27',
                groupId: 'meetings'
            },
            {
                title: 'AMC',
                start: '2020-02-05',
                allDay: true,
                color: 'green',
                groupId: 'contests'
            },
            {
                title: 'CSMC/CIMC',
                start: '2019-11-20',
                allDay: true,
                color: 'green',
                groupId: 'contests'
            },
            {
                title: 'Meeting',
                daysOfWeek: [4],
                startRecur: '2019-11-08',
                endRecur: '2019-12-19',
                groupId: 'meetings'
            },
            {
                title: 'Meeting',
                daysOfWeek: [4],
                startRecur: '2020-03-05',
                endRecur: '2020-03-19',
                groupId: 'meetings'
            },
            {
                title: 'Canceled Meeting',
                start: '2020-02-27',
                allDay: true,
                color: 'red'
            },
            {
                title: 'Euclid',
                start: '2020-04-07',
                allDay: true,
                color: 'green',
                groupId: 'contests'
            }
        ],
        height: 600
    });

    calendar.render()
});