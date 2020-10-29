import SignUp from './signup';

const Modals = () => {


    const close = () =>{
        const modal = document.querySelector('.modal');
        modal.classList.remove('modal-active');
        modal.innerHTML = '';
    };

    const openSignUp = () =>{
        document.querySelector('.modal').innerHTML = SignUp();
    };

    const init = open => {
        open();
        document.querySelectorAll('.modal__close').map(node => node.addEventListener('click', close));
    };


    const modal = document.createElement('div');
    modal.className = 'modal';
    document.body.append(modal);

    document.querySelectorAll('.ModalsOpenSignUp').map(node => node.addEventListener('click', init(openSignUp)));

};

export default Modals;
