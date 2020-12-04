import { SideModal } from '../components/modals/side_modal';
import { GameInner } from '../components/modals/inner/game';
require('../page_data/globals');
require('../page_scripts');

const Main = (name) => {
    return `
        
        <div class="game__modal__header shift-left">
          <div class="game__modal__header-help">
            <a href="#">Поддержка</a>
            <a href="#">Правила</a>
          </div>
          <div class="game__modal__header-name">${name}</div>
          <div class="game__modal__header-buttons">
            <button>
              <img src="./src/svg/fullWin.svg"/>
            </button>
            
            <button onclick="this.closest('.game__modal').classList.remove('modal-active')">
              <img src="./src/svg/gameClose.svg"/>
            </button>
          </div>
        </div>
        
        <div class="game__modal__content shift-left">
          <iframe allowfullscreen="allowfullscreen" class="iframe-block" src="https://supermegaslot.com/demo/game.php?game=3147"></iframe>
        </div>
        
        ${SideModal(GameInner(isLoggedIn()))}
        
    `
};

const main = document.getElementById('Main');

if (main) {
    main.innerHTML = Main();
}

export const Game = Main;
