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

        window.addEventListener('resize', () => {
          const modal = document.querySelector('.modal');
          const sh = document.querySelector('.section-header');
          modal.style.top = `${sh.clientHeight}px`;
          document.body.style['padding-top'] = `${sh.clientHeight}px`;
        })
    };

    document.addEventListener('DOMContentLoaded', () => {
        const sh = document.querySelector('.section-header');
        document.body.style['padding-top'] = `${sh.clientHeight}px`;
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

        Array.from(document.querySelectorAll('.ModalsOpenSignOut')).map(node => node.addEventListener('click', (ev) => {
            signOut(ev);
        }))
    })
};

export default Modals;
