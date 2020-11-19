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
    arrows: true,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4.5,
          arrows: false
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 4,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.3,
          arrows: true
        }
      }
    ]
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
    slidesToShow: 5,
    infinite: false,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4,
          arrows: false
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3.5,
          arrows: false
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 3,
          arrows: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2.7,
          arrows: false
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2.5,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.2,
          arrows: false
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1.8,
          arrows: false
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.8,
          arrows: false
        }
      }
    ]
});




