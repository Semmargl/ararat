import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel'
require('slick-carousel');


$('.section-slider_slider').slick({
    autoplay: false,
    slidesToShow: 1,
        // variableWidth: true
});



$('.section-gameSlider_slider').slick({
    autoplay: false,
    slidesToShow: 5,
    infinite: false,

});


$('.section-navbar_bot_inner').slick({
    autoplay: false,
    slidesToShow: 7,
        // variableWidth: true

});


$('.section-navbar_top_menu_mobile').slick({
  autoplay: false,
  slidesToShow: 3,
  infinite: false,
  variableWidth: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        arrows: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        arrows: true
      }
    }
  ]
});

$('.section-giftSlider_slider').slick({
    autoplay: false,
    slidesToShow: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.3,
          arrows: false
        }
      }
    ]
});




