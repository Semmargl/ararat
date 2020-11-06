import { Providers, Footer } from '../components/footer';
import Header from '../components/header';
import Heading from '../components/heading';
import { PromoContainer } from '../components/promo';
import { PromoList } from '../page_data';

let arr = PromoList(6);
let promos = [];
for (let i = 0; i < 7; i++) promos = promos.concat(arr);

const Main = () => {
    return `
        <div class="someGlobalClass">
            ${Header()}
            
            <div class="container">
                ${Heading('акции')}
                
                <div class="promo-slider">
                    ${PromoContainer(promos, 6)}
                </div>
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
