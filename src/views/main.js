import { Providers, Footer} from '../components/footer';
import Header from '../components/header';
import Slider from '../components/slider';
import {NavbarTop, NavbarBot} from '../components/navbar';
// import Top from '../components/top';
import GameSlider from '../components/gameSlider';
import GameList from '../components/gameList';
import Jackpot from '../components/Jackpot';
import { GiftSlider } from '../components/giftSlider';
import { TopSlides, PopularSlides } from '../page_data';
require('../page_data/globals');

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
            </div>
        </div>    
    `
};

const main = document.getElementById('Main');

if (main) {
    main.innerHTML = Main();
}
