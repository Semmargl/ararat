const PromoContainer = (promos, slides = 0) => {

  if (!Array.isArray(promos)) return '';

  if (slides === 0) {
    let str = '';
    for (let p of promos) str += p;

    return `
        <div class="promo-container">
            ${str}
        </div>
    `
  } else {
    let str = '';

    for (let i = 0; i < Math.ceil(promos.length / slides); i++) {
        let min = (i + 1) * slides;
        str += '<div class="promo-container">';

        for (let j = 0; j < slides; j++) {
          str += (promos[j + (i * slides)]);
        }

        str += '</div>';
    }

    return str;
  }
};

const Promo = (data) => {

    return `
        <div class="promo-wrapper">
            
            <div class="promo-image">${data.image ? `<img src="${data.image}" />` : ''}</div>
            
            <div class="promo-image-mob">${data.imageMob ? `<img src="${data.imageMob}" />` : ''}</div>
            
            <div class="promo-heading">${data.heading ? data.heading : ''}</div>
            
            <div class="promo-text">${data.text ? data.text : ''}</div>
            
            <div class="promo-link">
                <a href="#">ПОДРОБНЕЙ >></a>
            </div>

            ${data.button ? `<div class="promo-footer">${data.button}</div>` : ''}                       
        </div>  
    `

};

export {PromoContainer, Promo};
