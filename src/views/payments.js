import { Providers, Footer} from '../components/footer';
import Header from '../components/header';
import Heading from '../components/heading'
import Article from '../components/article'
import Table from '../components/table'
import { PromoContainer, Promo } from '../components/promo'
import { RedButton, PinkButton } from '../components/buttons'

const promos = [
  Promo({
      image: './src/images/promo/promo_1.png',
      imageMob: './src/images/promo/promo_2_m.png',
      heading: 'Каждую пятницу кешбек 5%',
      text: 'Клуб Арарат Голд дарит всем Новым Гостям отличный подарок на первый депозит. Начинай играть с нами, получай щедрый бонус автоматически на первый депозит и проверь свою удачу!',
      button: PinkButton('победить')
    }),

  Promo({
      image: './src/images/promo/promo_2.png',
      imageMob: './src/images/promo/promo_1_m.png',
      heading: '500 рублей без депозита – Акция GET LUCKY с NETENT на Арарат Голд!',
      text: 'Играть и выиграть – вот основная цель любого посетителя клуба!.Испытайте свою удачу на автоматах',
      button: RedButton('победить')
    }),

  Promo({
    image: './src/images/promo/promo_3.png',
      imageMob: './src/images/promo/promo_3_m.png',
    heading: '«Золотой Трамплин» от Клуба Арарат Голд!',
    text: 'Клуб Арарат Голд дарит всем Новым Гостям отличный подарок на первый депозит. Начинай играть с нами, получай щедрый бонус автоматически на первый депозит и проверь свою удачу!',
    button: RedButton('победить')
  })
];

const Main = () => {
    return `
        <div class="someGlobalClass">
            ${Header()}
            
            <div class="container">
                ${Heading('платежи')}
            </div>
            
            <div class="container">
                <div class="payments-container-inner">
                    ${Article(
                      'МЕТОДЫ ПОПОЛНЕНИЯ',
                      'Мы гарантируем, что ваши депозиты и снятие обрабатываются надежно и быстро. Способы оплаты зависят от страны.<br>' +
                      'Мы не взимаем никаких комиссий, однако некоторые переводы за пределы ЕС могут облагаться сборами, взимаемыми процессинговыми банками'
                    )}
                    
                    ${Table()}
                    
                    ${Article(
                      'МЕТОДЫ ВЫВОДА',
                      'Мы предоставляем нашим игрокам разные методы вывода вашего выигрыша!'
                    )}
                    
                    ${Table()}
                </div>  
            </div>
            
            <div class="container">
                ${Heading('акции')}
            
                ${PromoContainer(promos)}
            </div>
            
            ${Providers()}
            
            <div class="container">
                ${Footer()}
            </div>
        </div>    
    `
};

const main = document.getElementById('Main');

if (main) {
    main.innerHTML = Main();
}
