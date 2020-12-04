document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.side__modal__toggle').onclick = function () {
        this.parentNode.classList.toggle('active');
        Array.from(this.closest('.modal').querySelectorAll('.shift-left')).map(e => {
            e.classList.toggle('shifted');
        });
    }
})

export const SideModal = (inner) => {

    return `

        <div class="side__modal">
          <div class="side__modal__toggle"></div>
          <div class="side__modal__inner">
            ${inner}
          </div>
        </div>
        
    `
};
