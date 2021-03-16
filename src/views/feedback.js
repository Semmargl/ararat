import { Providers, Footer} from '../components/footer';
import Header from '../components/header';
import Heading from '../components/heading';
import Feedback from '../components/feedback';

require('../page_data/globals');

const Main = () => {
    return `
        <div class="someGlobalClass">
            ${Header()}
            
            <div class="container">
                ${Heading('Обратная связь')}
            </div>
                        
            <div class="container">
                ${Feedback()}
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
