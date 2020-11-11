import { SideModal } from '../components/modals/game_stat';
require('../page_data/globals');

const Main = () => {
    return `
        
        ${SideModal()}
        
    `
};

const main = document.getElementById('Main');

if (main) {
    main.innerHTML = Main();
}
