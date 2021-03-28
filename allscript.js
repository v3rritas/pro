

$(document).ready(function () {
    //кирпичКладка
    $('.content').masonry({
        columnWidth: 0,
        itemSelector: '.card',
        isFitWidth: true

    });

//меню
   $('.header__nav').hover(function () {
        $(this).addClass('menu__hover');
        },
        function () {
            $(this).removeClass('menu__hover');
   });

    $('.footer__nav').hover(function () {
            $(this).addClass('footer__hover');
        },
        function () {
            $(this).removeClass('footer__hover');
        });





});


