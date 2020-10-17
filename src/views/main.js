import Footer from '../components/footer';
import Header from '../components/header';

const Main = () => {
    return `
        <div class="someGlobalClass">
            <div class="container">
                ${Header()}
            </div>
            
            <div class="container">
                ${Footer()}
            </div>
        </div>    
    `
};

const main = document.getElementById('Main');

if (main) main.innerHTML = Main();
