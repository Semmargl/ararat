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

const GameSlider = (type, slides) => {
    let title = '';
    let icon = '';
    if (type === 'popular'){
        title = 'Популярные';
        icon = './src/svg/Popular.svg';

    } else if (type === 'top'){
        title = 'TOP';
        icon = './src/svg/starBig.svg';
    }


    let str = '';
    for (let s of slides) {
        str += GameSlide(s)
    }


    return `
        
    <section class="section-gameSlider">
        <div class="title-category">
            <div class="title-category_name">
                <img src="${icon}" alt="">
                <span>${title}</span>
            </div>
            <button class="title-category_more reset-btn">БОЛЬШЕ ИГР >></button>
        </div>

        <div  class="section-gameSlider_slider">
            ${str}
        </div>
    </section>

    `
};

export default GameSlider;

