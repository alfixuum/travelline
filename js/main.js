$(document).ready(function () {

    $('.reserved').click(function () {
        $(this).parents('.rooms__card').find('.card__reserved').css("display", "flex");
        $(this).parents('.rooms__card').addClass('active');
        $('.active').mouseleave(function () {
            $(this).find('.card__bg-reserved').css("display", "block");
            $(this).unbind('mouseleave');
        });
    });

    $('.card__bg-reserved').click(function (e) {
        $(this).parents('.rooms__card').removeClass('active');
        $(this).parents('.rooms__card').find('.card__reserved').css("display", "none");
        $(this).parents('.rooms__card').find('.card__bg-reserved').css("display", "none");
    });

    $('.card__reserved').click(function (e) {
        $(this).parents('.rooms__card').removeClass('active');
        $(this).parents('.rooms__card').find('.card__reserved').css("display", "none");
        $(this).parents('.rooms__card').find('.card__bg-reserved').css("display", "none");
    });

});

