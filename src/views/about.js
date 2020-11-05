import { Providers, Footer} from '../components/footer';
import Header from '../components/header';
import Heading from '../components/heading'
import Article from '../components/article'
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

const text = `«<b>Casino AG</b>» - сравнительно новый, но уже хорошо известный всем игрокам бренд в самых разных странах мира. В первую очередь он известен своей современной яркой атмосферой и богатым разнообразием слотов и бонусных предложений.

  <b>Ararat-gold.com</b> открывает новую страницу в истории любимых игровых брендов. Здесь вы можете найти игры мирового уровня от таких игровых провайдеров как: Microgaming, NetEnt, Play’nGo, Quickspin, Amatic и многих других.

  Знаменитые бренды в Клубе

  <b>Microgaming</b> - является лидером игорной индустрии. За десятилетия своего существования компания создала тысячи онлайн-слотов. Их алгоритмы сделали счастливыми миллионы людей со всего мира.',

  <b>NetEnt</b> - шведская компания, которая начала создавать слоты с 1996 года. Она является пионером онлайн-гемблинга и промышленного движка. Продукция этой марки легко узнаваема по запатентованной механике и детальной графике.

  <b>Play’nGo</b> - европейский производитель игр со всего мира.<br>Каждая игра - это яркое событие; каждое новое вращение - это вызов, который может сделать вас легендой и самым острым перцем в клубе Эль Хабанеро.

  В <b>Quickspin</b> есть современные, красивые и анимированные игры. Каждое вращение их слотов выглядит как выстрелы из голливудского блокбастера.',

  Компания <b>Amatic</b> создавала программный контент для оффлайн слотов. С развитием азартных игр в Интернете они быстро и успешно адаптировали свои продукты к новым стандартам.

  Удобные способы оплаты станут приятным дополнением к высококачественным играм с красочной графикой, захватывающими сюжетами и щедрой обратной связью.

  <b>Способы оплаты</b><br>В Эль-Хабанеро самые популярные и надежные способы оплаты.<br>Visa / Mastercard, QIWI, Yandex, MTS и многие другие. Вам будет легко делать депозиты и удобно снимать свой выигрыш!

  Мгновенные выплаты будут доступны нашим игрокам после подтверждения их учетной записи. Быстрый вывод средств будет осуществлен нашей финансовой службой в течение 12 часов.<br>Щедрая бонусная политика

  Это хорошее начало, чтобы получить приветственные бонусы за ваш первый набор депозитов. Множество щедрых подарков от Эль Хабанеро ждут вас хотя бы раз в неделю. Узнайте больше обо всех рекламных акциях в разделе акций нашего сайта. Следите за нашими новостями и рассылками, чтобы не пропустить специальные предложения.

  <b>Все для Вас наши Уважаемые Игроки с лучшим вкусом и прекрасным качеством 24 часа в день 7 дней в неделю!</b>`;

const Main = () => {
    return `
        <div class="someGlobalClass">
            ${Header()}
            
            <div class="container">
                ${Heading('о нас')}
            </div>
            
            <div class="container">
                <div class="about-heading-img">
                    <img src="./src/images/about.png"/>
                </div>
                
                <div class="about-heading-text">
                    самое горячее казино в сети
                </div>
                
                <div class="about-container-inner">
                    ${Article(
                      '',
                      text,
                      'font-size:18px;line-height:28px;color:#58466F;'
                    )}
                    
                    <div style="text-align:center">${PinkButton('победить')}</div>
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
