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
        
    <section class="section-popular">
        <div class="title-category">
            <div class="title-category_name">
                <img src="${icon}" alt="">
                <span>${title}</span>
            </div>
            
        </div>

        <div id="GameSlider" class="section-popular_wrap carousel slide" data-ride="carousel" data-interval="false">
            <div class="carousel-inner">
            <div class="section-popular_wrap__card carousel-item active"> 
                <img src="/src/images/GamePrevue3.png" alt="" class=" "> 
                <!-- <div class="section-popular_wrap__card_info">
                    <button class="section-popular_wrap__card_info_play reset-btn">Играть</button>
                    <p class="section-popular_wrap__card_info_subtitle">Демо</p>
                    <p class="section-popular_wrap__card_info_name">Reel Haist</p>
                    <div class="section-popular_wrap__card_info_rating">4.5</div>
                </div> -->
                 
            </div>
            <div class="section-popular_wrap__card carousel-item"> 
                <img src="/src/images/GamePrevue2.png" alt="" class=""> 
                <!-- <div class="section-popular_wrap__card_info">
                    <button class="section-popular_wrap__card_info_play reset-btn">Играть</button>
                    <p class="section-popular_wrap__card_info_subtitle">Демо</p>
                    <p class="section-popular_wrap__card_info_name">Reel Haist</p>
                    <div class="section-popular_wrap__card_info_rating">4.5</div>
                </div> -->
            </div>
            
            
            <a class="carousel-control-prev" href="#GameSlider" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#GameSlider" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>

            </div>
            

            
        </div>
    </section>




    `
};

export default GameSlider;