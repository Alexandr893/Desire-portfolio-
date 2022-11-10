$('.header__btn-menu').on('click',function(){
    $('.menu').toggleClass('menu--open');
});


if ($(window).width() < 651){
    $('.works-path__item--measurements').appendTo($('.works-path__items-box'))
};
