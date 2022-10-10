$(document).ready(function () {

    $('.reserved').click(function () {
        $(this).parents('.rooms__card').find('.rooms__reserved').css("display", "flex");
        $(this).parents('.rooms__card').addClass('active');
        $('.active').mouseleave(function () {
            $(this).find('.rooms__bg-reserved').css("display", "block");
            $(this).unbind('mouseleave');
        });
    });

    $('.rooms__bg-reserved').click(function (e) {
        $(this).parents('.rooms__card').removeClass('active');
        $(this).parents('.rooms__card').find('.rooms__reserved').css("display", "none");
        $(this).parents('.rooms__card').find('.rooms__bg-reserved').css("display", "none");
    });

    $('.rooms__reserved').click(function (e) {
        $(this).parents('.rooms__card').removeClass('active');
        $(this).parents('.rooms__card').find('.rooms__reserved').css("display", "none");
        $(this).parents('.rooms__card').find('.rooms__bg-reserved').css("display", "none");
    });

});

