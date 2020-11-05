import SignUp from './signup';

const Modals = () => {
    const close = () =>{
        const modal = document.querySelector('.modal');
        modal.classList.remove('modal-active');
        modal.innerHTML = '';
    };

    const openSignUp = (modal) =>{
        return SignUp();
    };

    const init = html => {
        const modal = document.querySelector('.modal');
        modal.innerHTML = `<div class="modal-inner"><button class="modal__close" onclick="Modals.close"></button>${html()}</div>`;
        
        modal.classList.add('modal-active');
        const sh = document.querySelector('.section-header');
        modal.style.top = `${sh.clientHeight}px`;
        Array.from(document.querySelectorAll('.modal__close')).map(node => node.addEventListener('click', close));
    };

    document.addEventListener('DOMContentLoaded', () => {
        const modal = document.createElement('div');
        modal.className = 'modal';
        document.querySelector('.someGlobalClass').append(modal);

        Array.from(document.querySelectorAll('.ModalsOpenSignUp')).map(node => node.addEventListener('click', () => {
            init(openSignUp)

            document.querySelector('.modal__form__field__wrap__hide-show').onclick = function () {
                this.previousElementSibling.setAttribute('type', !this.active ? 'text' : 'password');
                this.active = !this.active;
            }
        }))
    })
};

export default Modals;
