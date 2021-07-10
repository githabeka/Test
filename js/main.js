$(function(){
   
    $('.menu__btn').on('click', function(){
        $('.header__list').toggleClass('header__list--active');
        $('.menu__btn').toggleClass('menu__btn--active');
    });

});