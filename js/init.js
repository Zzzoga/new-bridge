// slick init

$('.modal__apart__items').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.mac__down.mac__control',
    nextArrow: '.mac__up.mac__control',
    vertical: true,
    verticalSwiping: true,
    swipe: false,
    dots: true
});

$('.screen_6 .slider__items').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '.screen_6 .slider__arrow.prev',
  nextArrow: '.screen_6 .slider__arrow.next',
  fade: true,
  dots: true
});

$('.screen_7 .slider__items').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '.screen_7 .slider__arrow.prev',
  nextArrow: '.screen_7 .slider__arrow.next',
  fade: true,
  dots: true
});

$('.screen_15 .slider__items').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '.screen_15 .slider__arrow.prev',
  nextArrow: '.screen_15 .slider__arrow.next',
  fade: true,
  dots: true
});

$('.news__wrapper').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '.slider__news .slider__arrow.prev',
  nextArrow: '.slider__news .slider__arrow.next',
  responsive: [
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.gallery__slider').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '.gallery__modal .slider__arrow.prev',
  nextArrow: '.gallery__modal .slider__arrow.next'
});