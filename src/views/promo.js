import { Providers, Footer} from '../components/footer';
import Header from '../components/header';
import Heading from '../components/heading'
import { PromoContainer, Promo } from '../components/promo'
import { RedButton, PinkButton } from '../components/buttons'

let arr = [
    Promo({
        image: './src/images/promo/promo_4.png',
        imageMob: './src/images/promo/promo_2_m.png',
        heading: 'Каждую пятницу кешбек 5%',
        text: 'Клуб Арарат Голд дарит всем Новым Гостям отличный подарок на первый депозит. Начинай играть с нами, получай щедрый бонус автоматически на первый депозит и проверь свою удачу!',
        button: PinkButton('победить')
    }),

    Promo({
        image: './src/images/promo/promo_5.png',
        imageMob: './src/images/promo/promo_2_m.png',
        heading: '500 рублей без депозита – Акция GET LUCKY с NETENT на Арарат Голд!',
        text: 'Играть и выиграть – вот основная цель любого посетителя клуба!.Испытайте свою удачу на автоматах',
        button: RedButton('победить')
    }),

    Promo({
        image: './src/images/promo/promo_6.png',
        imageMob: './src/images/promo/promo_2_m.png',
        heading: '«Золотой Трамплин» от Клуба Арарат Голд!',
        text: 'Клуб Арарат Голд дарит всем Новым Гостям отличный подарок на первый депозит. Начинай играть с нами, получай щедрый бонус автоматически на первый депозит и проверь свою удачу!',
        button: RedButton('победить')
    }),

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

let promos = [];
for (let i = 0; i < 7; i++) promos = promos.concat(arr);

const Main = () => {
    return `
        <div class="someGlobalClass">
            ${Header()}
            
            <div class="container">
                ${Heading('акции')}
                
                <div class="promo-slider">
                    ${PromoContainer(promos, 6)}
                </div>
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
