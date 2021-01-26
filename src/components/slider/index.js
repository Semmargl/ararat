const Slider = () => {

    return `
    <section class="section-slider">
      <div class="section-slider_slider">
        <div class="section-slider_slider__frame">
          <img src="./src/svg/slide1.svg" class="section-slider_slider__frame_bg" alt="...">
          <div class="section-slider_slider__frame-text-wrap">
              <div class="section-slider_slider__frame-text">
                <header>
                  <span>Быстрые выводы на Арарат Голд</span>
                </header>
                <article>
                  <span>Ускоряемся для Вас!</span>
                </article>
                <button class="section-slider-button">
                  Депозит
                  <img src="./src/svg/gift_slider.svg"/>
                </button>
              </div>
          </div>
        </div>
        <div class="section-slider_slider__frame">
          <img src="./src/svg/slide2.svg" class="section-slider_slider__frame_bg" alt="...">
          <div class="section-slider_slider__frame-text-wrap">
              <div class="section-slider_slider__frame-text">
                <header>
                  <span>Быстрые выводы на Арарат Голд</span>
                </header>
                <article>
                  <span>Ускоряемся для Вас!</span>
                </article>
                <button class="section-slider-button">
                  Депозит
                  <img src="./src/svg/gift_slider.svg"/>
                </button>
              </div>
          </div>
        </div>
      </div>
      <div class="grad-line-bottom"></div>
    </section>
    `
};

export default Slider;
