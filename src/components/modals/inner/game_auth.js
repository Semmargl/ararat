export const GameAuth = () => {
  return `
  
    <div class="side__modal__inner-row">
        <img class="section-header_logo" src="./src/svg/AraratLogo.svg" alt="">
      </div>
      <div class="side__modal__inner-row">
        <div class="side__modal__inner-row_account">
          <div class="side__modal__inner-row_account-face">
            <span  class="side__modal__inner-row_account-face-img">
              <img src="./src/svg/acc.svg" alt="">
            </span>
            <span  class="side__modal__inner-row_account-face-name">
              Илья Пчелкин
            </span>
          </div>
        </div>
      </div>
      <form>
        <div class="side__modal__inner-row">
          <div class="side__modal__inner-row_balance">
            <div class="side__modal__inner-row_balance-current">
              <header>Основной баланс</header>
              <article>
                <img src="./src/svg/balance.svg" alt=""/>
                <span>13 000 ₽</span>
              </article>
            </div>
            <div class="side__modal__inner-row_balance-bonus">
              <header>Бонусный баланс</header>
              <article>
                <img src="./src/svg/bonus.svg" alt=""/>
                <span>33 000 000 ₽</span>
              </article>
            </div>
          </div>
        </div>
        <div class="side__modal__inner-row">
          <div class="side__modal__inner-row_methods">
            <header>Выберете метод оплаты</header>
            <div class="side__modal__inner-row_methods-blocks">
              <div class="side__modal__inner-row_methods-blocks-item">
                <img src="./src/svg/Mastercard_sm.svg" alt=""/>
                <span></span>
                <header>Mastercard</header>
              </div>
              <div class="side__modal__inner-row_methods-blocks-item">
                <img src="./src/svg/Qiwi_sm.svg" alt=""/>
                <span></span>
                <header>Qiwi</header>
              </div>
              <div class="side__modal__inner-row_methods-blocks-item">
                <img src="./src/svg/YAndex_money_sm.svg" alt=""/>
                <span></span>
                <header>Yandex money</header>
              </div>
            </div>
          </div>
        </div>  
        <div class="side__modal__inner-row">  
          <div class="side__modal__inner-row_other">
            <div class="custom-select">
              <select>
                <option>Другие методы оплаты</option>
                <option>метод 1</option>
                <option>метод 2</option>
                <option>метод 3</option>
                <option>метод 4</option>
              </select>
            </div>
          </div>
        </div>
        <div class="side__modal__inner-row">
          <div class="side__modal__inner-row_amount">
            <header>Выберите сумму пополнения</header>
            <div class="side__modal__inner-row_amount-input">
              <input type="text" value="" placeholder="1 000 ₽ ">
            </div>
          </div>
        </div>  
        <div class="side__modal__inner-row">
          <div class="side__modal__inner-row_gift">
            <span class="side__modal__inner-row_gift__checkbox">
              <input type="checkbox" required class="side__modal__inner-row_gift__checkbox__input">
              <mark></mark>
              <label class="side__modal__inner-row_gift__checkbox__label"><b>+ 567 ₽</b> в подарок</label>
            </span>  
          </div>
        </div>
        <div class="side__modal__inner-row">
          <button class="side__modal__inner-row_button">пополнить счет</button>
        </div>
      </form>  
  `
}