import Footer from '../components/footer';

const Main = () => {
    return `
        <div class="someGlobalClass">
            <div class="container">
                <h1>Some code for example</h1>
            </div>
            
            <div class="container">
                ${Footer()}
            </div>
        </div>    
    `
};

const main = document.getElementById('Main');

if (main) main.innerHTML = Main();
