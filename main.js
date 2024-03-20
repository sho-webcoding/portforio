$(function () {
    setTimeout(function () {
        $('body').fadeIn(1500);
    }, 600);
});

$(window).scroll(function () {
    $('#service li,#works li,#about .flex').each(function () {
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100) {
            $(this).addClass('scrollin');
        }
    });
});
