import Modals from '../modals';

export default () => {

    const submit = e => {
        e.preventDefault();
    };

    return `
        <div id="signInModal">
            <div class="modal__banner">
                <div class="modal__banner__title">Получи подарок</div>
                <div class="modal__banner__image"><img src="./src/images/loginBanner.png" alt=""></div>
            </div>  
            
            <form class="modal__form" onclick="submit">
                <div class="modal__form__title">500 рублей за регистрацию</div>
                <div class="modal__form__soc">
                    <div class="modal__form__soc__title">Или войти через соц. сети</div>
                    <div class="modal__form__soc__list">
                        <button class="modal__form__soc__list__google modal__form__soc__list__icon"></button>
                        <button class="modal__form__soc__list__vk modal__form__soc__list__icon"></button>
                        <button class="modal__form__soc__list__fb modal__form__soc__list__icon"></button>
                        <button class="modal__form__soc__list__twitter modal__form__soc__list__icon"></button>
                        <button class="modal__form__soc__list__odnoklasniki modal__form__soc__list__icon"></button>
                    </div>
                </div>
                <div class="modal__form__field">
                    <label class="modal__form__field__label" for="signInModal_login">Email или номер телефона </label>
                    <div class="modal__form__field__wrap">
                        <input class="modal__form__field__wrap__input input_validation-text" type="text" id="signInModal_login" placeholder="Введите вашу почту или телефон">
                        <div class="modal__form__field__tooltips">
                            <div class="modal__form__field__tooltips__item modal__form__field__tooltips__item-error">Неверный телефон или почта</div>
                            <div class="modal__form__field__tooltips__item modal__form__field__tooltips__item-notice">Я подсказка</div>
                        </div>
                    </div>
                </div>
                <div class="modal__form__field">
                    <label class="modal__form__field__label" for="signInModal_password">Пароль</label>
                    <div class="modal__form__field__wrap">
                        <input class="modal__form__field__wrap__input input_validation-password" type="password" placeholder="Введите ваш пароль" id="signInModal_password">
                        <div class="modal__form__field__wrap__hide-show"></div>
                        <div class="modal__form__field__tooltips">
                            <div class="modal__form__field__tooltips__item modal__form__field__tooltips__item-error">Неверный пароль</div>
                            <div class="modal__form__field__tooltips__item modal__form__field__tooltips__item-notice">Я подсказка</div>
                        </div>
                    </div>
                </div>
                <div class="modal__form__field">
                    <div class="modal__form__field__wrap">
                        <span class="modal__form__field__wrap__checkbox">
                            <input type="checkbox" class="modal__form__field__wrap__checkbox__input">
                            <mark></mark>
                            <label class="modal__form__field__wrap__checkbox__label">Я согласен с <a class="modal__form__field__label__link" href="#">правилами казино</a></label>
                        </span>    
                        <div class="modal__form__field__tooltips">
                            <div class="modal__form__field__tooltips__item modal__form__field__tooltips__item-error">Нажми меня</div>
                        </div>
                    </div>
                </div>
                <button class="modal__form__submit">
                    Забрать подарок
                    <img src="./src/images/gift.png" />
                </button>
                <div class="modal__form__switch_form">
                    <div class="modal__form__switch_form__text">Уже имеете акаунт?</div>
                    <div class="modal__form__switch_form__button">ВОЙТИ</div>
                </div>
            </form>
        </div>
    `
};
