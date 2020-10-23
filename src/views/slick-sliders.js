import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel'

require('slick-carousel');

$('.section-gameSlider_slider').slick({
    autoplay: false,
    slidesToShow: 5
})
