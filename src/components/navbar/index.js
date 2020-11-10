

const NavbarTop = () => {

    return `
    
    <section class="section-navbar">
      
        <div class="section-navbar_top container">
          <nav class="section-navbar_top_menu">
            <a href="#" class="section-navbar_top_menu__link">все игры</a>
            <a href="#" class="section-navbar_top_menu__link">Live casino</a>
            <a href="#" class="section-navbar_top_menu__link">ТОП</a>
            <a href="#" class="section-navbar_top_menu__link">Классика</a>
            <a href="#" class="section-navbar_top_menu__link">Настольные</a>
            <a href="#" class="section-navbar_top_menu__link">ms&Виртуальные</a>
            <a href="#" class="section-navbar_top_menu__link">Фавориты</a>
          </nav>
          
          <div class="section-navbar_top_search">
            <div class="section-navbar_top_search-select custom-select">
              <select>
                <option>Провайдеры</option>
                <option>NETENT</option>
                <option>WAZDAN</option>
                <option>Amatic</option>
                <option>Apollo</option>
                <option>Evoplay</option>
                <option>Microgaming</option>
                <option>Microgaming</option>
                <option>Microgaming</option>
                <option>Microgaming</option>
              </select>
            </div>
            <div class="section-navbar_top_search_wrap">
              <input class="section-navbar_top_search_area" type="text" placeholder="Поиск...">
              <button class="section-navbar_top_search_action reset-btn" onclick="toggleSearch(event,this)">
                <img src="./src/svg/searchglass.svg" alt=""/>
              </button>
            </div>
           
          </div>
  
          <nav class="section-navbar_top_menu_mobile">
            <div class="section-navbar_top_menu_mobile-item">
              <a href="#" class="section-navbar_top_menu__link active">все игры</a>
            </div>
            <div class="section-navbar_top_menu_mobile-item">
              <a href="#" class="section-navbar_top_menu__link">Live casino</a>
             </div>
            <div class="section-navbar_top_menu_mobile-item">
              <a href="#" class="section-navbar_top_menu__link">ТОП</a>
            </div>
            <div class="section-navbar_top_menu_mobile-item">
              <a href="#" class="section-navbar_top_menu__link">Классика</a>
            </div>
            <div class="section-navbar_top_menu_mobile-item">
              <a href="#" class="section-navbar_top_menu__link">Настольные</a>
            </div>
            <div class="section-navbar_top_menu_mobile-item">
              <a href="#" class="section-navbar_top_menu__link">ms&Виртуальные</a>
            </div>
            <div class="section-navbar_top_menu_mobile-item">
              <a href="#" class="section-navbar_top_menu__link">Фавориты</a>
            </div>
          </nav>
      </div>
     
      <div class="grad-line-bottom"></div>
    </section>
   
    `
};
const NavbarBot = () => {

    return `
    
    <section class="section-navbar">
      

      <div class="section-navbar_bot">
        <div class="section-navbar_bot_inner container">
            <a href="#" class="section-navbar_bot_inner__prov"><img src="./src/svg/Ezugi.svg" alt="" ></a>
            <a href="#" class="section-navbar_bot_inner__prov"><img src="./src/svg/Novomatic.svg" alt="" ></a>
            <a href="#" class="section-navbar_bot_inner__prov"><img src="./src/svg/egt.svg" alt="" "></a>
            <a href="#" class="section-navbar_bot_inner__prov"><img src="./src/svg/Igrosoft.svg" alt="" ></a>
            <a href="#" class="section-navbar_bot_inner__prov"><img src="./src/svg/Amatic.svg" alt="" c></a>
            <a href="#" class="section-navbar_bot_inner__prov"><img src="./src/svg/AristoCrat.svg" alt="" ></a>
            <a href="#" class="section-navbar_bot_inner__prov"><img src="./src/svg/Netent.svg" alt="" ></a>
            <a href="#" class="section-navbar_bot_inner__prov"><img src="./src/svg/Microgaing.svg" alt="" ></a>
            <a href="#" class="section-navbar_bot_inner__prov"><img src="./src/svg/AplloGames.svg" alt="" ></a>
            <a href="#" class="section-navbar_bot_inner__prov"><img src="./src/svg/IGT.svg" alt="" ></a>
            <a href="#" class="section-navbar_bot_inner__prov"><img src="./src/svg/Merkur.svg" alt="" ></a>
            <a href="#" class="section-navbar_bot_inner__prov"><img src="./src/svg/Wazdan.svg" alt="" ></a>
            <a href="#" class="section-navbar_bot_inner__prov"><img src="./src/svg/endorphina.svg" alt="" ></a>
            <a href="#" class="section-navbar_bot_inner__prov"><img src="./src/svg/playtech.svg" alt="" ></a>
            <a href="#" class="section-navbar_bot_inner__prov"><img src="./src/svg/quickspin.svg" alt="" ></a>
            <a href="#" class="section-navbar_bot_inner__prov"><img src="./src/svg/greentube.svg" alt="" ></a>
        </div>
      </div>
      
    </section>
   
    `
};

export {NavbarTop, NavbarBot};