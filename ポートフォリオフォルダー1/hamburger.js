$(function () {
    $('#hamburger').on('click', function () {
        $('#hamburger').toggleClass("active");
        $('header ul').slideToggle();
    });
});