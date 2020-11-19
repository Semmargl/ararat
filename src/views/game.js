import { SideModal } from '../components/modals/side_modal';
import { GameAuth } from '../components/modals/inner/game_auth';
import { GameNonAuth } from '../components/modals/inner/game_nonauth';
require('../page_data/globals');
require('../page_scripts');

let modalInner;

if (isLoggedIn()) {
  modalInner = GameAuth();
} else {
  modalInner = GameNonAuth();
}

const Main = () => {
    return `
        
        ${SideModal(modalInner)}
        
    `
};

const main = document.getElementById('Main');

if (main) {
    main.innerHTML = Main();
}

export const Game = Main;
