const GameSlide = (data) => {
    return `
    
        <div class="section-gameSlider_slider__card "> 
            <div class="section-gameSlider_slider__card-bg">
                <img src="${data.image}" alt="" class=" "> 
            </div>
            <div class="section-gameSlider_slider__card_info">
                <button class="section-gameSlider_slider__card_info_play reset-btn">Играть</button>
                <p class="section-gameSlider_slider__card_info_subtitle">${data.demoTitle}</p>
                <div class="section-gameSlider_slider__card_info__wrap"> 
                    <button class="section-gameSlider_slider__card_info__wrap_like reset-btn"></button>
                    <p class="section-gameSlider_slider__card_info__wrap_nameGame">${data.name}</p> 
                </div>
                <div class="section-gameSlider_slider__card_info_rating">${data.rating}</div>
            </div>
        </div> 
        
    `
}

const GameSlider = (type, slides, search = '') => {
    let title = '';
    let icon = '';
    let top = '';
    if (type === 'popular'){
        title = 'Популярные';
        icon = './src/svg/Popular.svg';
        top = `<div class="title-category_name">
                    <img src="${icon}" alt="">
                    <span>${title}</span>
                </div>
                <button class="title-category_more reset-btn">БОЛЬШЕ ИГР >></button>`;
    } else if (type === 'top'){
        title = 'TOP';
        icon = './src/svg/starBig.svg';
        top = `<div class="title-category_name">
                   <img src="${icon}" alt="">
                   <span>${title}</span>
               </div>
                <button class="title-category_more reset-btn">БОЛЬШЕ ИГР >></button>`;
    } else if (type === 'search'){
        top = `<div class="title-search_name">По запросу <b>${search}</b> найдено ${slides.length} игры</div>`
    }


    let str = '';
    for (let s of slides) {
        str += GameSlide(s)
    }

    return `
        
        <section class="section-gameSlider">
            <div class="title-category">
                ${top}
            </div>
    
            <div  class="section-gameSlider_slider">
                ${str}
            </div>
            ${type === 'search' ? '<div class="title-divider"></div>' : ''}
        </section>

    `
};

export default GameSlider;

