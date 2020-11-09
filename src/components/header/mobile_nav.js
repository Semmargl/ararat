export const MobileNav = () => {
  return `
  
    <div class="section-header-sidenav">
      <div class="dropdown">
        <div class="dropdown-toggle" type="button" onclick="this.classList.toggle('active');this.nextElementSibling.classList.toggle('active')">
          <img src="./src/svg/ru.svg"/>&nbsp;&nbsp;Ру
        </div>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Pol</a>
          <a class="dropdown-item" href="#">Eng</a>
          <a class="dropdown-item" href="#">Ру</a>
        </div>
      </div>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            <span class="nav-img"><img src="./src/svg/menuGift.svg" alt=""></span>
            <span class="nav-item-title">Подарки</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span class="nav-img"><img src="./src/svg/menuGame.svg" alt=""></span>
            <span class="nav-item-title">ИГРЫ</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span class="nav-img"><img src="./src/svg/menuTournament.svg" alt=""></span>
            <span class="nav-item-title">Турниры</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span class="nav-img"><img src="./src/svg/menuPeyment.svg" alt=""></span>
            <span class="nav-item-title">Платежи</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span class="nav-img"><img src="./src/svg/menuNews.svg" alt=""></span>
            <span class="nav-item-title">Новости</span>
          </a>
        </li>
      </ul>     
      <ul class="navbar-nav-bottom">
        <li class="nav-item active">
          <a class="nav-link" href="#">новости</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">казино</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">как играть</a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link ModalsOpenSignOut" href="#">
            <span class="nav-img"><img src="./src/svg/exit.svg" alt=""></span>
            <span class="nav-item-title">Выход</span>
          </a>
        </li>
      </ul>  
    </div>
  
  `
}