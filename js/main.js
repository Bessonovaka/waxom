$(document).ready(function () {

$('.counter__count').countTo();

$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
            prevArrow: ".slider__btn--prev",
            nextArrow: ".slider__btn--next",
            appendDots: '.pagination',
            customPaging : function(slider, i) {
                return '<div class="pagination__link"></div>';
            }
  });

  $('#post__slider-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    appendDots: '.post-pagination-1',
    customPaging : function(slider, i) {
        return '<div class="pagination__link"></div>';
    }
  });

  $('#post__slider-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    appendDots: '.post-pagination-2',
    customPaging : function(slider, i) {
        return '<div class="pagination__link"></div>';
    }
  });

  $('#post__slider-3').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    appendDots: '.post-pagination-3',
    customPaging : function(slider, i) {
        return '<div class="pagination__link"></div>';
    }
  });

  let mobileNav = function () {
    $("#menu__toggle").click(function(){

      $('.header__nav').toggle();
    });
  };

  mobileNav();

});
