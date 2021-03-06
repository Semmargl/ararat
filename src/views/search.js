import { Providers, Footer} from '../components/footer';
import Header from '../components/header';
import Slider from '../components/slider';
import { NavbarTop, NavbarBot } from '../components/navbar';
// import Top from '../components/top';
import GameSlider from '../components/gameSlider';
import GameList from '../components/gameList';
import Jackpot from '../components/Jackpot';
import { GiftSlider } from '../components/giftSlider';
import { TopSlides, PopularSlides } from '../page_data';
import { GameModal } from "../components/modals/game_modal";
import { Game } from "./game";

require('../page_data/globals');
require('../page_scripts');

const Main = () => {

    return `
        <div class="someGlobalClass">
            
            ${Header()}
             
            ${Slider()}

            <div class="container">
                ${NavbarTop()}
            </div>      
            
            ${NavbarBot()}
            
            <div class="container">
                ${GameSlider('search', TopSlides, 'Book of')}
            </div>
            
            <div class="container">
                ${GameSlider('top', TopSlides)}
            </div>
            
            <div class="container">
                ${Jackpot()}
            </div>
            
            <div class="container">
                ${GameSlider(`popular`, PopularSlides)}
            </div>

            <div class="container">
                ${GiftSlider()}
            </div>

            <div class="container">
                ${GameList()}  
            </div>

            ${Providers()}
            
            <div class="container">
                ${Footer()}
                ${GameModal(Game('Fruit Coctail'))}
            </div>
        </div>    
    `
};

const main = document.getElementById('Main');

if (main) {
    main.innerHTML = Main();
}

function initTimer(e) {
  const offset = parseInt(e.dataset.time_offset);
  e.dataset.end = new Date().getTime() + 1000 * 60 * 60 * 5;

  if (!isNaN(offset)) {
    e.dataset.end = new Date().getTime() + 1000 * 60 * 60 * offset;
  }

  e.interval = setInterval(function() {
    const now = new Date().getTime();
    const distance = parseInt(e.dataset.end) - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    e.innerHTML = `${days > 0 ? days : ''} ${hours}:${minutes}:${seconds}`;


    if (e.interval < 0) {
      clearInterval(e.interval);
      e.innerHTML = "Время вышло";
    }
  }, 1000);
}

Array.from(document.querySelectorAll('.jackpot-countdown')).map(node => initTimer(node))

document.addEventListener('DOMContentLoaded', () => {
  Array.from(document.querySelectorAll('.section-gameSlider_slider__card_info_subtitle,.section-gameList_wrap__card_info_subtitle')).map(e => {
    e.onclick = function () {
      document.querySelector('.game__modal').classList.add('modal-active')
    }
  });
  document.querySelector('.section-gameList__moreList').onclick = function () {
    this.closest('.container').classList.add('opened')
  };
  document.querySelector('.section-gameList .title-category_more').onclick = function () {
    this.closest('.container').classList.add('opened')
  }
});