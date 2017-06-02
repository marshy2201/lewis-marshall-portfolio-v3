$(function () {

    //menu scroll
    $('#menu-icon').on('click', function () {
        $('#accordion').not(':animated').slideToggle(400);
    });

    //treehouse json
    $.getJSON('https://teamtreehouse.com/lewismarshall.json', function (data) {
        $('#profile-links a:first-of-type').after('<p>Points: ' + data.points.total + '</p>');
        $('#profile-links a:last-child').after('<p>Level: 6</p>');
        $('#profile-links p').hide().slideDown(1000);
    });

    //form submit
    $('form').on('submit', function (e) {
        e.preventDefault();
        let htmlContent = '<p>Please send me an email at '; 
        htmlContent += '<a href="mailto:lewis.marshall22@yahoo.co.uk">lewis.marshall22@yahoo.co.uk</a>'; 
        htmlContent += ' as a back-end script has not been setup yet.</p>';
        $('form').html(htmlContent);
    });

    //iframe scrolling
    $mapLocation = $('#map-location');
    $iframe = $('iframe');

    $mapLocation.on('click', function () {
        $iframe.removeClass('scroll-off');
    });

    $mapLocation.on('mouseleave', function () {
        $iframe.addClass('scroll-off');
    });
});