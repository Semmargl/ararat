const RedButton = (text, url = '') => {
    return `
    
        <a class="page-button-red" href="${url ? url : '#'}">
           ${text}
        </a>
    
    `
};

const PinkButton = (text, url = '') => {
  return `
    
        <a class="page-button-pink" href="${url ? url : '#'}">
           ${text}
        </a>
    
    `
};

export { RedButton, PinkButton };
