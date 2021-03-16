const Feedback = () => {

    return `

      <div class="section-feedback">
        <form class="section-feedback__form">
            <div class="section-feedback__form__field">
                <label class="section-feedback__form__field__label" for="signInModal_login">Имя</label>
                <div class="section-feedback__form__field__wrap">
                    <input class="section-feedback__form__field__wrap__input input_validation-text" required type="text" id="signInModal_login" placeholder="Введите ваше имя">
                    <div class="section-feedback__form__field__wrap__tooltips">
                        <div class="section-feedback__form__field__wrap__tooltips__item section-feedback__form__field__wrap__tooltips__item-error">Вы забыли ввести ваше имя</div>
                    </div>
                </div>
            </div>
            <div class="section-feedback__form__field">
                <label class="section-feedback__form__field__label" for="signInModal_login">Email</label>
                <div class="section-feedback__form__field__wrap">
                    <input class="section-feedback__form__field__wrap__input input_validation-text" required type="text" id="signInModal_login" placeholder="Введите Ваш email">
                    <div class="section-feedback__form__field__wrap__tooltips">
                        <div class="section-feedback__form__field__wrap__tooltips__item section-feedback__form__field__wrap__tooltips__item-error">Вы забыли ввести вашу почту</div>
                    </div>
                </div>
            </div>
            <div class="section-feedback__form__field">
                <label class="section-feedback__form__field__label" for="signInModal_login">Сообщение</label>
                <div class="section-feedback__form__field__wrap">
                    <textarea class="section-feedback__form__field__wrap__input section-feedback__form__field__wrap__input_textarea input_validation-text" row="3" required type="text" id="signInModal_login" placeholder="Текст Вашего сообщения"></textarea>
                    <div class="section-feedback__form__field__wrap__tooltips">
                        <div class="section-feedback__form__field__wrap__tooltips__item section-feedback__form__field__wrap__tooltips__item-error">Вы забыли ввести ваше сообщение</div>
                    </div>
                </div>
            </div>
            
            <div class="section-feedback__form__file">
                <input type="file" class="section-feedback__form__file__input" accept="image/x-png,image/jpeg" multiple >
                <div class="section-feedback__form__file__title">ЗАГРУЗИТЬ ВЛОЖЕНИЕ</div>
                <div class="section-feedback__form__file__requirements">
                    Мы поддерживаем форматы JPG <br> и PNG не более 10мб. <br> Максимальное количество файлов – 10 
                </div>
            </div>
            <button class="section-feedback__form__button">ОТПРАВИТЬ</button>
        </form>
      </div>
      
    `
};

export default Feedback;
