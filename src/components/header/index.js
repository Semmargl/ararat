const Header = () => {
    if (state.loggedIn) {
      return `
    
        <header class="section-header">
            <div class="section-header_inner">
                <div class="section-header_burger"> 
        
                      <nav class="navbar navbar-expand-lg ">
                        <a class="navbar-brand" href="#"></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                          <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">
                                  <img class="nav-img" src="./src/svg/menuGift.svg" alt="">
                                  Подарки
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                  <img class="nav-img" src="./src/svg/menuGame.svg" alt="">
                                  ИГРЫ
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                  <img class="nav-img" src="./src/svg/menuTournament.svg" alt="">
                                  Турниры
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                  <img class="nav-img" src="./src/svg/menuPeyment.svg" alt="">
                                  Платежи
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                  <img class="nav-img" src="./src/svg/menuNews.svg" alt="">
                                  Новости
                                </a>
                            </li>
                          </ul>
                        </div>
                      </nav>
                
                
                </div>
                <img class="section-header_logo" src="./src/svg/AraratLogo.svg" alt="">
                <div class="section-header_right">
                    <div class="section-header_right__acc">
                      <img src="./src/svg/profile.svg"/>
                    </div>
                    <div class="section-header_right__balance">
                      <div class="section-header_right__balance__bal">
                        <header>баланс</header>
                        <section>
                          <img src="./src/svg/balance.svg"/>
                          13 000 ₽
                        </section>
                      </div>
                      <div class="section-header_right__balance__bonus">
                        <header>бонус</header>
                        <section>
                          <img src="./src/svg/bonus.svg"/>
                          33 000 ₽
                        </section>
                      </div>
                    </div>
                    <button class="section-header_right__deposit">депозит</button>
                    <button class="section-header_right__log reset-btn section-header_right-padding ModalsOpenSignOut">Выход</button>
                    <div class="dropdown section-header_right-padding">
                        <button class="btn btn-secondary dropdown-toggle reset-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Ру
                        </button>
        
                        <!--  -->
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" href="#">Pol</a>
                          <a class="dropdown-item" href="#">Eng</a>
                          <a class="dropdown-item" href="#">Ру</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="grad-line-bottom"></div>
        </header>
        
        `
    } else {
      return `
    
        <header class="section-header">
            <div class="section-header_inner">
                <div class="section-header_burger"> 
        
                      <nav class="navbar navbar-expand-lg ">
                        <a class="navbar-brand" href="#"></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                          <ul class="navbar-nav">
                            <li class="nav-item active">
                                <img class="nav-img" src="./src/svg/menuGift.svg" alt="">
                                <a class="nav-link" href="#">Подарки</a>
                            </li>
                            <li class="nav-item">
                                <img class="nav-img" src="./src/svg/menuGame.svg" alt="">
                                <a class="nav-link" href="#">ИГРЫ</a>
                            </li>
                            <li class="nav-item">
                                <img class="nav-img" src="./src/svg/menuTournament.svg" alt="">
                                <a class="nav-link" href="#">Турниры</a>
                            </li>
                            <li class="nav-item">
                                <img class="nav-img" src="./src/svg/menuPeyment.svg" alt="">
                                <a class="nav-link" href="#">Платежи</a>
                            </li>
                            <li class="nav-item">
                                <img class="nav-img" src="./src/svg/menuNews.svg" alt="">
                                <a class="nav-link" href="#">Новости</a>
                            </li>
                          </ul>
                        </div>
                      </nav>
                
                
                </div>
                <img class="section-header_logo" src="./src/svg/AraratLogo.svg" alt="">
                <div class="section-header_right">
                    <button class="section-header_right__reg reset-btn section-header_right-padding"><span>500 рублей за регистрацию</span>
                      <img src="./src/svg/giftRegYellow.svg" alt="">
                    </button>
                    <button class="section-header_right__log reset-btn section-header_right-padding ModalsOpenSignUp">Вход</button>
                    <div class="dropdown section-header_right-padding">
                        <button class="btn btn-secondary dropdown-toggle reset-btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Ру
                        </button>
        
                        <!--  -->
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" href="#">Pol</a>
                          <a class="dropdown-item" href="#">Eng</a>
                          <a class="dropdown-item" href="#">Ру</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="grad-line-bottom"></div>
        </header>
        
        `
    }
};

export default Header;