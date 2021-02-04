const Jackpot = () => {
  return `
  
    <div class="section-jackpot">
      <div class="section-jackpot__count">
        <div class="section-jackpot__count-left">
          <header>
            <span>Ежедневный</span>
          </header>
          <div class="section-jackpot__count-left-main">
            <img class="jackpot-bg" src="./src/svg/jackpot_left_bg.svg"/>
            <div class="jackpot-content">
              <div class="jackpot-countdown" data-time_offset="5"></div>  
              <div class="jackpot-amount">5 425,04 ₽</div>
              <a href="#" class="jackpot-more">Подробнее</a>
            </div>
          </div>
        </div>
        <div class="section-jackpot__count-right">
          <header>
            <span>Ежемесячный</span>
          </header>
          <div class="section-jackpot__count-right-main">
            <img class="jackpot-bg" src="./src/svg/jackpot_right_bg.svg"/>
            <img class="jackpot-bg-mobile" src="./src/svg/jackpot_right_bg_m.svg"/>
            <div class="jackpot-content">
              <div class="jackpot-countdown" data-time_offset="125"></div>  
              <div class="jackpot-amount">334 425,39 ₽</div>
              <a href="#" class="jackpot-more">Подробнее</a>
            </div>
          </div>
        </div>
      </div>
      <div class="section-jackpot__winning">
        <div class="section-jackpot__winning-title">Сейчас выигрывают</div>
        <div class="section-jackpot__winning-games">
          <div class="section-jackpot__winning-games-item">
            <div class="section-jackpot__winning-games-item__img">
              <img src="./src/svg/winning1.svg"/>
            </div>
            <div class="section-jackpot__winning-games-item__text">
              <header>Nikela***</header>
              <article>20$</article>
              <footer>Gems wild</footer>
            </div>
          </div>
          <div class="section-jackpot__winning-games-item">
            <div class="section-jackpot__winning-games-item__img">
              <img src="./src/svg/winning2.svg"/>
            </div>
            <div class="section-jackpot__winning-games-item__text">
              <header>NewPlaye***</header>
              <article>120$</article>
              <footer>Book of Ra</footer>
            </div>
          </div>
          <div class="section-jackpot__winning-games-item">
            <div class="section-jackpot__winning-games-item__img">
              <img src="./src/svg/winning3.svg"/>
            </div>
            <div class="section-jackpot__winning-games-item__text">
              <header>jonnyMars***</header>
              <article>210$</article>
              <footer>Book of Maya</footer>
            </div>
          </div>
          <div class="section-jackpot__winning-games-item">
            <div class="section-jackpot__winning-games-item__img">
              <img src="./src/svg/winning2.svg"/>
            </div>
            <div class="section-jackpot__winning-games-item__text">
              <header>NewPlaye***</header>
              <article>120$</article>
              <footer>Book of Ra</footer>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  `
};

export default Jackpot