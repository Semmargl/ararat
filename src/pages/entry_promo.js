import '../scss/style.scss'
import '../views/promo.js'
import $ from 'jquery';
require('../page_data/globals');

window.$ = window.jQuery = $;
import 'slick-carousel'
require('slick-carousel');

$('.promo-slider').slick({
  autoplay: false,
  slidesToShow: 1,
  infinite: false,
  dots: true,
  prevArrow: false,
  nextArrow: false,

  customPaging : function(slider, i) {
    // if (i === 5) return '<a href="javascript:void(0)" class="dot=next">>></a>';
    if (i > 5) return false;
    return `<a href="javascript:void(0)">${i+1}</a>`;
  }
});

const c = document.querySelector('.promo-slider');

const prev = document.createElement('span');
prev.className = 'dot-prev';
prev.textContent = '<<';
prev.style.display = 'none';
c.insertBefore(prev, c.lastElementChild);

prev.onclick = function () {
    $(this.parentNode).slick('slickPrev');
};

const next = document.createElement('span');
next.prev = prev;
next.className = 'dot-next';
next.textContent = '>>';
c.appendChild(next);

next.onclick = function () {
    $(this.parentNode).slick('slickNext');
    $(this.prev).show();
};


