const Slider = () => {

    return `
    
    <section class="section-slider">
      <div class="section-slider_slider">
        <div class="section-slider_slider__frame">
          
          <img src="./src/images/slide1.png" class="section-slider_slider__frame_bg" alt="...">

          <div class="section-slider_slider__frame_offer section-slider_slider__frame_offer-inner">
            <h1 class="section-slider_slider__frame_offer__title">
              <span> Быстрые выводы </span>
            </h1> 
            <h1 class="section-slider_slider__frame_offer__title">
              <span> на Арарат Голд </span>
            </h1> 
            <h2 class="section-slider_slider__frame_offer__title">
              <span  class="section-slider_slider__frame_offer__title-small"> Ускоряемся для Вас! </span>
            </h2> 
            <button class="section-slider_slider__frame_offer__action reset-btn">
              <span>Регистрация</span> 
              <img src="./src/svg/giftRegGreen.svg" alt="">
            </button>
          </div>
        </div>  
        <div class="section-slider_slider__frame">
          
          <img src="./src/images/slide2.png" class="section-slider_slider__frame_bg" alt="...">

          <div class="section-slider_slider__frame_offer">
            <h1 class="section-slider_slider__frame_offer__title">
              <span> Быстрые выводы </span>
            </h1> 
            <h1 class="section-slider_slider__frame_offer__title">
              <span> на Арарат Голд </span>
            </h1> 
            <h2 class="section-slider_slider__frame_offer__title">
              <span  class="section-slider_slider__frame_offer__title-small"> Ускоряемся для Вас! </span>
            </h2> 
            <button class="section-slider_slider__frame_offer__action reset-btn">
              <span>Регистрация</span> 
              <img src="./src/svg/giftRegGreen.svg" alt="">
            </button>
          </div>
        </div>  

      </div>

      <div class="grad-line-bottom"></div>
    </section>




    `
};

export default Slider;