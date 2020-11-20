const GameList = () => {

    return `
        
<section class="section-gameList">
    <div class="title-category">
        <div class="title-category_name">
            <img src="./src/svg/Popular.svg" alt="">
            <span>Игры</span>
        </div>

        <button class="title-category_more reset-btn">БОЛЬШЕ ИГР >></button>
    </div>
    
    <div class="section-gameList_wrap">
        <virtual-scroller #scroll [items]="items">
            <div class="section-gameList_wrap__card"> 
                <img src="./src/images/GamePrevMiddle.png" alt=""> 
                <div class="section-gameList_wrap__card-bg"></div>
                <div class="section-gameList_wrap__card_info">
                    <button class="section-gameList_wrap__card_info_play reset-btn">Играть</button>
                    <p class="section-gameList_wrap__card_info_subtitle">Демо</p>
                </div>
                <div class="section-gameList_wrap__card__wrap"> 
                    <button class="section-gameList_wrap__card__wrap_like reset-btn"></button>
                    <p class="section-gameList_wrap__card__wrap_nameGame">Lucky Easter</p> 
                </div>
                <div class="section-gameList_wrap__card_rating">4.5</div>
            </div>
            <div class="section-gameList_wrap__card"> 
                <img src="./src/images/GamePrevMiddle.png" alt=""> 
                <div class="section-gameList_wrap__card-bg"></div>
                <div class="section-gameList_wrap__card_info">
                    <button class="section-gameList_wrap__card_info_play reset-btn">Играть</button>
                    <p class="section-gameList_wrap__card_info_subtitle">Демо</p>
                </div>
                <div class="section-gameList_wrap__card__wrap"> 
                    <button class="section-gameList_wrap__card__wrap_like reset-btn"></button>
                    <p class="section-gameList_wrap__card__wrap_nameGame">Lucky Easter</p> 
                </div>
                <div class="section-gameList_wrap__card_rating">4.5</div>
            </div>
            <div class="section-gameList_wrap__card"> 
                <img src="./src/images/GamePrevMiddle.png" alt=""> 
                <div class="section-gameList_wrap__card-bg"></div>
                <div class="section-gameList_wrap__card_info">
                    <button class="section-gameList_wrap__card_info_play reset-btn">Играть</button>
                    <p class="section-gameList_wrap__card_info_subtitle">Демо</p>
                </div>
                <div class="section-gameList_wrap__card__wrap"> 
                    <button class="section-gameList_wrap__card__wrap_like reset-btn"></button>
                    <p class="section-gameList_wrap__card__wrap_nameGame">Lucky Easter</p> 
                </div>
                <div class="section-gameList_wrap__card_rating">4.5</div>
            </div>
            <div class="section-gameList_wrap__card"> 
                <img src="./src/images/GamePrevMiddle.png" alt=""> 
                <div class="section-gameList_wrap__card-bg"></div>
                <div class="section-gameList_wrap__card_info">
                    <button class="section-gameList_wrap__card_info_play reset-btn">Играть</button>
                    <p class="section-gameList_wrap__card_info_subtitle">Демо</p>
                </div>
                <div class="section-gameList_wrap__card__wrap"> 
                    <button class="section-gameList_wrap__card__wrap_like reset-btn"></button>
                    <p class="section-gameList_wrap__card__wrap_nameGame">Lucky</p> 
                </div>
                <div class="section-gameList_wrap__card_rating">4.5</div>
            </div>
            <div class="section-gameList_wrap__card"> 
                <img src="./src/images/GamePrevMiddle.png" alt=""> 
                <div class="section-gameList_wrap__card-bg"></div>
                <div class="section-gameList_wrap__card_info">
                    <button class="section-gameList_wrap__card_info_play reset-btn">Играть</button>
                    <p class="section-gameList_wrap__card_info_subtitle">Демо</p>
                </div>
                <div class="section-gameList_wrap__card__wrap"> 
                    <button class="section-gameList_wrap__card__wrap_like reset-btn"></button>
                    <p class="section-gameList_wrap__card__wrap_nameGame">Easter</p> 
                </div>
                <div class="section-gameList_wrap__card_rating">4.5</div>
            </div>
            <div class="section-gameList_wrap__card"> 
                <img src="./src/images/GamePrevMiddle.png" alt=""> 
                <div class="section-gameList_wrap__card-bg"></div>
                <div class="section-gameList_wrap__card_info">
                    <button class="section-gameList_wrap__card_info_play reset-btn">Играть</button>
                    <p class="section-gameList_wrap__card_info_subtitle">Демо</p>
                </div>
                <div class="section-gameList_wrap__card__wrap"> 
                    <button class="section-gameList_wrap__card__wrap_like reset-btn"></button>
                    <p class="section-gameList_wrap__card__wrap_nameGame">Lucky Easter</p> 
                </div>
                <div class="section-gameList_wrap__card_rating">4.5</div>
            </div>
            <div class="section-gameList_wrap__card"> 
                <img src="./src/images/GamePrevMiddle.png" alt=""> 
                <div class="section-gameList_wrap__card-bg"></div>
                <div class="section-gameList_wrap__card_info">
                    <button class="section-gameList_wrap__card_info_play reset-btn">Играть</button>
                    <p class="section-gameList_wrap__card_info_subtitle">Демо</p>
                </div>
                <div class="section-gameList_wrap__card__wrap"> 
                    <button class="section-gameList_wrap__card__wrap_like reset-btn"></button>
                    <p class="section-gameList_wrap__card__wrap_nameGame">Lucky Easter</p> 
                </div>
                <div class="section-gameList_wrap__card_rating">4.5</div>
            </div>
            <div class="section-gameList_wrap__card"> 
                <img src="./src/images/GamePrevMiddle.png" alt=""> 
                <div class="section-gameList_wrap__card-bg"></div>
                <div class="section-gameList_wrap__card_info">
                    <button class="section-gameList_wrap__card_info_play reset-btn">Играть</button>
                    <p class="section-gameList_wrap__card_info_subtitle">Демо</p>
                </div>
                <div class="section-gameList_wrap__card__wrap"> 
                    <button class="section-gameList_wrap__card__wrap_like reset-btn"></button>
                    <p class="section-gameList_wrap__card__wrap_nameGame">Lucky Easter</p> 
                </div>
                <div class="section-gameList_wrap__card_rating">4.5</div>
            </div>
            <div class="section-gameList_wrap__card"> 
                <img src="./src/images/GamePrevMiddle.png" alt=""> 
                <div class="section-gameList_wrap__card-bg"></div>
                <div class="section-gameList_wrap__card_info">
                    <button class="section-gameList_wrap__card_info_play reset-btn">Играть</button>
                    <p class="section-gameList_wrap__card_info_subtitle">Демо</p>
                </div>
                <div class="section-gameList_wrap__card__wrap"> 
                    <button class="section-gameList_wrap__card__wrap_like reset-btn"></button>
                    <p class="section-gameList_wrap__card__wrap_nameGame">Lucky Easter</p> 
                </div>
                <div class="section-gameList_wrap__card_rating">4.5</div>
            </div>
            <div class="section-gameList_wrap__card"> 
                <img src="./src/images/GamePrevMiddle.png" alt=""> 
                <div class="section-gameList_wrap__card-bg"></div>
                <div class="section-gameList_wrap__card_info">
                    <button class="section-gameList_wrap__card_info_play reset-btn">Играть</button>
                    <p class="section-gameList_wrap__card_info_subtitle">Демо</p>
                </div>
                <div class="section-gameList_wrap__card__wrap"> 
                    <button class="section-gameList_wrap__card__wrap_like reset-btn"></button>
                    <p class="section-gameList_wrap__card__wrap_nameGame">Lucky Easter</p> 
                </div>
                <div class="section-gameList_wrap__card_rating">4.5</div>
            </div>
            <div class="section-gameList_wrap__card"> 
                <img src="./src/images/GamePrevMiddle.png" alt=""> 
                <div class="section-gameList_wrap__card-bg"></div>
                <div class="section-gameList_wrap__card_info">
                    <button class="section-gameList_wrap__card_info_play reset-btn">Играть</button>
                    <p class="section-gameList_wrap__card_info_subtitle">Демо</p>
                </div>
                <div class="section-gameList_wrap__card__wrap"> 
                    <button class="section-gameList_wrap__card__wrap_like reset-btn"></button>
                    <p class="section-gameList_wrap__card__wrap_nameGame">Lucky Easter</p> 
                </div>
                <div class="section-gameList_wrap__card_rating">4.5</div>
            </div>
            <div class="section-gameList_wrap__card"> 
                <img src="./src/images/GamePrevMiddle.png" alt=""> 
                <div class="section-gameList_wrap__card-bg"></div>
                <div class="section-gameList_wrap__card_info">
                    <button class="section-gameList_wrap__card_info_play reset-btn">Играть</button>
                    <p class="section-gameList_wrap__card_info_subtitle">Демо</p>
                </div>
                <div class="section-gameList_wrap__card__wrap"> 
                    <button class="section-gameList_wrap__card__wrap_like reset-btn"></button>
                    <p class="section-gameList_wrap__card__wrap_nameGame">Lucky Easter</p> 
                </div>
                <div class="section-gameList_wrap__card_rating">4.5</div>
            </div>
        </virtual-scroller>
    </div>

    <button class="section-gameList__moreList reset-btn">еще игры >></button>

</section>




    `
};

export default GameList;