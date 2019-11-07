$(function () {
    $('a').click(function (event) {
        alert("You should not use any link on this page!");
        event.preventDefault();
    });

    $('html').dblclick(function (e) {
        $('#coord').text('Double-click detected at ' + e.pageX + ', ' + e.pageY + '\n');
    });

    $('#but1').click(function () {
        $('#sal').addClass('cap');
    });
    $('#but3').click(function () {
        $('#sal').toggleClass('blue');
    });
    $('#but2').click(function () {
        $('#sal').removeClass('cap');
    });

})
