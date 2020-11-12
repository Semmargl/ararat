document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.side__modal__toggle').onclick = function () {
        this.parentNode.classList.toggle('active');
    }
})

export const SideModal = (inner) => {
    console.log(inner);
    return `

        <div class="side__modal">
          <div class="side__modal__toggle"></div>
          <div class="side__modal__inner">
            ${inner}
          </div>
        </div>
        
    `
};
