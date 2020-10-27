

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
            <input class="section-navbar_top_search_area" type="text" placeholder="Поиск..." aria-label="Search">
            <button class="section-navbar_top_search_action reset-btn"><img src="/src/svg/searchglass.svg" alt=""></button>
          </div>
  
        
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
            <a href="#"><img src="/src/svg/Ezugi.svg" alt="" class="section-navbar_bot_inner__prov"></a>
            <a href="#"><img src="/src/svg/Novomatic.svg" alt="" class="section-navbar_bot_inner__prov"></a>
            <a href="#"><img src="/src/svg/egt.svg" alt="" class="section-navbar_bot_inner__prov"></a>
            <a href="#"><img src="/src/svg/Igrosoft.svg" alt="" class="section-navbar_bot_inner__prov"></a>
            <a href="#"><img src="/src/svg/Amatic.svg" alt="" class="section-navbar_bot_inner__prov"></a>
            <a href="#"><img src="/src/svg/AristoCrat.svg" alt="" class="section-navbar_bot_inner__prov"></a>
            <a href="#"><img src="/src/svg/Netent.svg" alt="" class="section-navbar_bot_inner__prov"></a>
            <a href="#"><img src="/src/svg/Microgaing.svg" alt="" class="section-navbar_bot_inner__prov"></a>
            <a href="#"><img src="/src/svg/AplloGames.svg" alt="" class="section-navbar_bot_inner__prov"></a>
            <a href="#"><img src="/src/svg/IGT.svg" alt="" class="section-navbar_bot_inner__prov"></a>
            <a href="#"><img src="/src/svg/Merkur.svg" alt="" class="section-navbar_bot_inner__prov"></a>
            <a href="#"><img src="/src/svg/Wazdan.svg" alt="" class="section-navbar_bot_inner__prov"></a>
            <a href="#"><img src="/src/svg/endorphina.svg" alt="" class="section-navbar_bot_inner__prov"></a>
            <a href="#"><img src="/src/svg/playtech.svg" alt="" class="section-navbar_bot_inner__prov"></a>
            <a href="#"><img src="/src/svg/quickspin.svg" alt="" class="section-navbar_bot_inner__prov"></a>
            <a href="#"><img src="/src/svg/greentube.svg" alt="" class="section-navbar_bot_inner__prov"></a>
        </div>
      </div>
      
    </section>
   
    `
};

export {NavbarTop, NavbarBot};