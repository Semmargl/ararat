import { Providers, Footer} from '../components/footer';
import Header from '../components/header';
import Heading from '../components/heading';
import Faq from '../components/faq';

require('../page_data/globals');

const Main = () => {
    return `
        <div class="someGlobalClass">
            ${Header()}
            
            <div class="container">
                ${Heading('FAQ')}
            </div>
                        
            <div class="container">
                ${Faq()}
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
