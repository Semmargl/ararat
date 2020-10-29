import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel'


require('slick-carousel');
$('.section-slider_slider').slick({
    autoplay: false,
    slidesToShow: 1,
        // variableWidth: true
})


require('slick-carousel');
$('.section-gameSlider_slider').slick({
    autoplay: false,
    slidesToShow: 5,
    infinite: false,
    // variableWidth: true
})

require('slick-carousel');
$('.section-navbar_bot_inner').slick({
    autoplay: false,
    slidesToShow: 7,
        // variableWidth: true
        
})


require('slick-carousel');
$('.section-giftSlider_slider').slick({
    autoplay: false,
    slidesToShow: 4,
    infinite: false,

    // variableWidth: true
})




