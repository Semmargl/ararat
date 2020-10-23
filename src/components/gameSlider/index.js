const GameSlider = (type) => {
    let title = '';
    let icon = '';
    if (type === 'popular'){
        title = 'Популярные';
        icon = '/src/svg/Popular.svg';

    } else if (type === 'top'){
        title = 'TOP';
        icon = '/src/svg/starBig.svg';
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

        <div  class="section-gameSlider_slider"  >
            
            <div class="section-gameSlider_slider__card "> 

                <img src="/src/images/GamePrevue3.png" alt="" class=" "> 
                <div class="section-gameSlider_slider__card-bg"></div>
                <div class="section-gameSlider_slider__card_info">
                    <button class="section-gameSlider_slider__card_info_play reset-btn">Играть</button>
                    <p class="section-gameSlider_slider__card_info_subtitle">Демо</p>
                    <p class="section-gameSlider_slider__card_info_name">Reel Haist</p>
                    <div class="section-gameSlider_slider__card_info_rating">4.5</div>
                </div>
                 
            </div>
            <div class="section-gameSlider_slider__card "> 

                <img src="/src/images/GamePrevue3.png" alt="" class=" "> 
                <div class="section-gameSlider_slider__card-bg"></div>
                <div class="section-gameSlider_slider__card_info">
                    <button class="section-gameSlider_slider__card_info_play reset-btn">Играть</button>
                    <p class="section-gameSlider_slider__card_info_subtitle">Демо</p>
                    <p class="section-gameSlider_slider__card_info_name">Reel Haist</p>
                    <div class="section-gameSlider_slider__card_info_rating">4.5</div>
                </div>
                 
            </div>
            <div class="section-gameSlider_slider__card "> 

                <img src="/src/images/GamePrevue3.png" alt="" class=" "> 
                <div class="section-gameSlider_slider__card-bg"></div>
                <div class="section-gameSlider_slider__card_info">
                    <button class="section-gameSlider_slider__card_info_play reset-btn">Играть</button>
                    <p class="section-gameSlider_slider__card_info_subtitle">Демо</p>
                    <p class="section-gameSlider_slider__card_info_name">Reel Haist</p>
                    <div class="section-gameSlider_slider__card_info_rating">4.5</div>
                </div>
                 
            </div>
            <div class="section-gameSlider_slider__card "> 

                <img src="/src/images/GamePrevue3.png" alt="" class=" "> 
                <div class="section-gameSlider_slider__card-bg"></div>
                <div class="section-gameSlider_slider__card_info">
                    <button class="section-gameSlider_slider__card_info_play reset-btn">Играть</button>
                    <p class="section-gameSlider_slider__card_info_subtitle">Демо</p>
                    <p class="section-gameSlider_slider__card_info_name">Reel Haist</p>
                    <div class="section-gameSlider_slider__card_info_rating">4.5</div>
                </div>
                 
            </div>
            <div class="section-gameSlider_slider__card "> 

                <img src="/src/images/GamePrevue3.png" alt="" class=" "> 
                <div class="section-gameSlider_slider__card-bg"></div>
                <div class="section-gameSlider_slider__card_info">
                    <button class="section-gameSlider_slider__card_info_play reset-btn">Играть</button>
                    <p class="section-gameSlider_slider__card_info_subtitle">Демо</p>
                    <p class="section-gameSlider_slider__card_info_name">Reel Haist</p>
                    <div class="section-gameSlider_slider__card_info_rating">4.5</div>
                </div>
                 
            </div>
            <div class="section-gameSlider_slider__card "> 

                <img src="/src/images/GamePrevue3.png" alt="" class=" "> 
                <div class="section-gameSlider_slider__card-bg"></div>
                <div class="section-gameSlider_slider__card_info">
                    <button class="section-gameSlider_slider__card_info_play reset-btn">Играть</button>
                    <p class="section-gameSlider_slider__card_info_subtitle">Демо</p>
                    <p class="section-gameSlider_slider__card_info_name">Reel Haist</p>
                    <div class="section-gameSlider_slider__card_info_rating">4.5</div>
                </div>
                 
            </div>
            <div class="section-gameSlider_slider__card "> 

                <img src="/src/images/GamePrevue3.png" alt="" class=" "> 
                <div class="section-gameSlider_slider__card-bg"></div>
                <div class="section-gameSlider_slider__card_info">
                    <button class="section-gameSlider_slider__card_info_play reset-btn">Играть</button>
                    <p class="section-gameSlider_slider__card_info_subtitle">Демо</p>
                    <p class="section-gameSlider_slider__card_info_name">Reel Haist</p>
                    <div class="section-gameSlider_slider__card_info_rating">4.5</div>
                </div>
                 
            </div>
            <div class="section-gameSlider_slider__card "> 

                <img src="/src/images/GamePrevue3.png" alt="" class=" "> 
                <div class="section-gameSlider_slider__card-bg"></div>
                <div class="section-gameSlider_slider__card_info">
                    <button class="section-gameSlider_slider__card_info_play reset-btn">Играть</button>
                    <p class="section-gameSlider_slider__card_info_subtitle">Демо</p>
                    <p class="section-gameSlider_slider__card_info_name">Reel Haist</p>
                    <div class="section-gameSlider_slider__card_info_rating">4.5</div>
                </div>
                 
            </div>
            <div class="section-gameSlider_slider__card "> 

                <img src="/src/images/GamePrevue3.png" alt="" class=" "> 
                <div class="section-gameSlider_slider__card-bg"></div>
                <div class="section-gameSlider_slider__card_info">
                    <button class="section-gameSlider_slider__card_info_play reset-btn">Играть</button>
                    <p class="section-gameSlider_slider__card_info_subtitle">Демо</p>
                    <p class="section-gameSlider_slider__card_info_name">Reel Haist</p>
                    <div class="section-gameSlider_slider__card_info_rating">4.5</div>
                </div>
                 
            </div>
            
            
            
            
            

            
        </div>
    </section>


    `

   
};

export default GameSlider;

