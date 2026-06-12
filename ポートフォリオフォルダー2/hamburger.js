$(function () {
    $('#hamburger').on('click', function () {
        $('#hamburger').toggleClass("open");
        $('.clearfix ul').slideToggle();
    });
});