import { Providers, Footer} from '../components/footer';
import Header from '../components/header';
import Slider from '../components/slider';
import Navbar from '../components/navbar';
// import Top from '../components/top';
import GameSlider from '../components/gameSlider';
import Games from '../components/games';

const Main = () => {
    return `
        <div class="someGlobalClass">
            
            ${Header()}
             
            ${Slider()}
                        
            ${Navbar()}

        <div class="container">
            ${GameSlider('top')}
        </div>
        <div class="container">
            ${GameSlider(`popular`)}
        </div>
        <div class="container">
            ${Games()}  
        </div>

             
        

            
            
            
            ${Providers()}
            <div class="container">
                ${Footer()}
            </div>
        </div>    
    `
};

const main = document.getElementById('Main');

if (main) main.innerHTML = Main();
