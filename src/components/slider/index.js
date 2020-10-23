const Slider = () => {

    return `
    
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        
    
        <div class="carousel-inner">
          <div class="container">
            <div class="carousel-offer">
              <h1 class="carousel-offer__title">
                <span> Быстрые выводы </span>
              </h1> 
              <h1 class="carousel-offer__title">
                <span> на Арарат Голд </span>
              </h1> 
              <h2 class="carousel-offer__title">
                <span  class="carousel-offer__title-small"> Ускоряемся для Вас! </span>
              </h2> 
              <button class="carousel-offer__action reset-btn">
                <span>Регистрация</span> 
                <img src="/src/svg/giftRegGreen.svg" alt="">
              </button>
              
            </div>
          </div>
          


          <div class="carousel-item active">
            <img src="/src/images/slide1.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="/src/images/slide2.png" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="/src/images/slide1.png" class="d-block w-100" alt="...">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
        
      </div>
      <div class="grad-line-bottom"></div>
  
    
    `
};

export default Slider;