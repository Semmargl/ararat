const Header = () => {

    return `
    
 
    <header class="section-header">
        <div class="section-header_burger"> 

              <nav class="navbar navbar-expand-lg ">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                        <img class="nav-img" src="/src/svg/menuGift.svg" alt="">
                        <a class="nav-link" href="#">Подарки <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <img class="nav-img" src="/src/svg/menuGame.svg" alt="">
                        <a class="nav-link" href="#">ИГРЫ</a>
                    </li>
                    <li class="nav-item">
                        <img class="nav-img" src="/src/svg/menuTournament.svg" alt="">
                        <a class="nav-link" href="#">Турниры</a>
                    </li>
                    <li class="nav-item">
                        <img class="nav-img" src="/src/svg/menuPeyment.svg" alt="">
                        <a class="nav-link" href="#">Платежи</a>
                    </li>
                    <li class="nav-item">
                        <img class="nav-img" src="/src/svg/menuNews.svg" alt="">
                        <a class="nav-link" href="#">Новости</a>
                    </li>
                  </ul>
                </div>
              </nav>
        
        
        </div>
        <img class="section-header_logo" src="/src/svg/AraratLogo.svg" alt="">
        <div class="section-header_right">
            <button class="section-header_right__reg reset-btn section-header_right-padding"><span>500 рублей за регистрацию</span>
              <img src="/src/svg/giftRegYellow.svg" alt="">
            </button>
            <button class="section-header_right__log reset-btn section-header_right-padding">Вход</button>
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
        
        
    </header>
    <div class="grad-line-bottom"></div>
    
   
    
    
    `
};

export default Header;