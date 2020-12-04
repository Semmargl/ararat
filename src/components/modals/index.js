import SignUp from './signup';

const Modals = () => {
    const close = (_this) =>{
        const modal = _this.closest('.modal');
        modal.classList.remove('modal-active');
        modal.innerHTML = '';
    };

    const openSignUp = () =>{
        return SignUp();
    };

    const init = html => {
        const modal = document.querySelector('.modal:not(.game__modal)');
        modal.innerHTML = `<div class="modal-inner"><button class="modal__close"></button>${html()}</div>`;
        
        modal.classList.add('modal-active');
        const sh = document.querySelector('.section-header');
        modal.style.top = `${sh.clientHeight}px`;
        Array.from(document.querySelectorAll('.modal__close'))
          .map(node => node.addEventListener('click', () => close(node)));
        modal.querySelector('.modal__form__field__wrap__hide-show').onclick = function () {
            this.previousElementSibling.setAttribute('type', !this.active ? 'text' : 'password');
            this.active = !this.active;
        }
    };

    window.addEventListener('resize', () => {
        const sh = document.querySelector('.section-header');
        document.body.style['padding-top'] = `${sh.clientHeight}px`;
        const modal = document.querySelector('.modal:not(.game__modal)');
        modal.style.top = `${sh.clientHeight}px`;
    });

    document.addEventListener('DOMContentLoaded', () => {
        const sh = document.querySelector('.section-header');
        document.body.style['padding-top'] = `${sh.clientHeight}px`;
        const modal = document.createElement('div');
        modal.className = 'modal';
        document.querySelector('.someGlobalClass').append(modal);

        Array.from(document.querySelectorAll('.ModalsOpenSignUp'))
          .map(node => node.addEventListener('click', () => {
            init(openSignUp)
        }))

        Array.from(document.querySelectorAll('.ModalsOpenSignOut'))
          .map(node => node.addEventListener('click', (ev) => {
            signOut(ev);
        }))
    })
};

export default Modals;
