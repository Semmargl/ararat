import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel'

require('slick-carousel');

$('.section-gameSlider_slider').slick({
    autoplay: false,
    slidesToShow: 5,
    
    variableWidth: true
})

require('slick-carousel');
$('.section-navbar_bot_inner').slick({
    autoplay: false,
    slidesToShow: 8,
        variableWidth: true
})


require('slick-carousel');
$('.section-giftSlider_slider').slick({
    autoplay: false,
    slidesToShow: 4,
    variableWidth: true
})




