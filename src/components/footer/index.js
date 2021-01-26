import Modals from '../modals';

const Providers = () => {

    return ` 
    
    <div class="section-footer_provider">
        <div class="inner">
            <img src="./src/svg/Ezugi.svg" alt="" class="section-footer_provider__logo">
            <img src="./src/svg/Novomatic.svg" alt="" class="section-footer_provider__logo">
            <img src="./src/svg/egt.svg" alt="" class="section-footer_provider__logo">
            <img src="./src/svg/Igrosoft.svg" alt="" class="section-footer_provider__logo">
            <img src="./src/svg/Amatic.svg" alt="" class="section-footer_provider__logo">
            <img src="./src/svg/AristoCrat.svg" alt="" class="section-footer_provider__logo">
            <img src="./src/svg/Netent.svg" alt="" class="section-footer_provider__logo">
            <img src="./src/svg/Microgaing.svg" alt="" class="section-footer_provider__logo">
            <img src="./src/svg/AplloGames.svg" alt="" class="section-footer_provider__logo">
            <img src="./src/svg/IGT.svg" alt="" class="section-footer_provider__logo">
            <img src="./src/svg/Merkur.svg" alt="" class="section-footer_provider__logo">
            <img src="./src/svg/Wazdan.svg" alt="" class="section-footer_provider__logo">
            <img src="./src/svg/endorphina.svg" alt="" class="section-footer_provider__logo">
            <img src="./src/svg/playtech.svg" alt="" class="section-footer_provider__logo">
            <img src="./src/svg/quickspin.svg" alt="" class="section-footer_provider__logo">
            <img src="./src/svg/greentube.svg" alt="" class="section-footer_provider__logo">
        </div>
    </div>

    `

}



const Footer = () => {
    Modals();

    return `
    
    <footer class="section-footer">
        
       <nav class="section-footer_menu">
            <a href="#" class="section-footer_menu__link">Main</a>
            <a href="#" class="section-footer_menu__link">Blog</a>
            <a href="#" class="section-footer_menu__link">About Us</a>
            <a href="#" class="section-footer_menu__link">Contact Us</a>
            <a href="#" class="section-footer_menu__link">FAQ</a>
            <a href="#" class="section-footer_menu__link">Terms&Conditions</a>
            <a href="#" class="section-footer_menu__link">Privacy Policy</a>
            <a href="#" class="section-footer_menu__link">Cookies Policy</a>
        </nav>

        <div class="section-footer_payment">
            <img src="./src/svg/Lic.svg" alt="" class="section-footer_payment__logo section-footer_payment__logo-mobile">
            <img src="./src/svg/Visa.svg" alt="" class="section-footer_payment__logo">
            <img src="./src/svg/Mastercard.svg" alt="" class="section-footer_payment__logo">
            <img src="./src/svg/Qiwi.svg" alt="" class="section-footer_payment__logo">
            <img src="./src/svg/YAndex_money.svg" alt="" class="section-footer_payment__logo">
            <img src="./src/svg/Lic.svg" alt="" class="section-footer_payment__logo section-footer_payment__logo-desktop">
            <img src="./src/svg/bitcoin.svg" alt="" class="section-footer_payment__logo">
            <img src="./src/svg/Alfa_bank.svg" alt="" class="section-footer_payment__logo">
            <img src="./src/svg/Beeline.svg" alt="" class="section-footer_payment__logo">
            <img src="./src/svg/MTS.svg" alt="" class="section-footer_payment__logo">
            <img src="./src/svg/Megafon.svg" alt="" class="section-footer_payment__logo">
            <img src="./src/svg/tele2.svg" alt="" class="section-footer_payment__logo">
        </div>

        <p class="section-footer_text">
            Ararat Gold works to give its players 100% satisfaction through its exceptional gaming website. We strive to provide a casino with a highly regulated, secure and trustworthy gaming space, 
with a pleasant and above all exciting atmosphere. 
Ararat Gold is a legal website in conformity with the regulations concerning Belgian casinos and under the authority of the Belgian Gambling Commission. Our clientele is of highest importance to us; our website has been recognised several times as the best customer service provider of the year, for the incomparable quality of our customer relations. The objective of Ararat Gold is to respond to client requests in less than 30 minutes, 7 days a week, 24 hours a day.
        </p>

        <div class="section-footer_contacts">
            <div class="section-footer_contacts__data">
              <a class="section-footer_contacts__number" href="tel:+78122009512">+7 812 200 95 12</a>
              <a class="section-footer_contacts__mail" href="mailto:support@ararat.gold">support@ararat.gold</a>
            </div>
            <div class="dropdown section-footer_contacts__lang">
              <div class="dropdown">
                <div class="dropdown-toggle" type="button" onclick="this.classList.toggle('active');this.nextElementSibling.classList.toggle('active')">
                  <img src="./src/svg/ru.svg"/>&nbsp;&nbsp;Ру
                </div>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Pol</a>
                  <a class="dropdown-item" href="#">Eng</a>
                  <a class="dropdown-item" href="#">Ру</a>
                </div>
              </div>
            </div>
            <div class="section-footer_contacts__footer social-footer">
                <button class="social-footer__google social-footer-icon"></button>
                <button class="social-footer__vk social-footer-icon"></button>
                <button class="social-footer__fb social-footer-icon"></button>
                <button class="social-footer__twitter social-footer-icon"></button>
                <button class="social-footer__odnoklasniki social-footer-icon"></button>
            </div>
        </div>

        <p class="section-footer_text section-footer_text-short">
            This website is operated by AREONTRADE LTD Dramas 2, 5th floor 1077, Nicosia, Cyprus,
            under license 8048/JAZ2017-011 issued by Curacao eGaming holder of Master License
                      
        </p>

        <div class="section-footer_rights">
            <div class="section-footer_rights__item">All rights reserved  ARARAT GOLD ©</div>
            <img src="./src/svg/age18.svg" title="18+" class="section-footer_rights__item"></img>
            <img src="./src/svg/GamCare.svg" title="GamCare" class="section-footer_rights__item"></img>
            <img src="./src/svg/begambleAwere.svg" title="beGambleAwere" class="section-footer_rights__item"></img>
        </div>

    
</footer> 
    
    
    
    
    `
};


export {Providers, Footer};

