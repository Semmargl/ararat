export const GameModal = (content) => {
  return `
      
      <div class="modal game__modal">
          <button class="modal__close" onclick="this.parentNode.classList.remove('modal-active')"></button>
          ${content}
      </div>
      
  `;
};