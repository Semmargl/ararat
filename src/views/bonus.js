import { Providers, Footer} from '../components/footer';
import Header from '../components/header';
import Heading from '../components/heading';
import Article from '../components/article';
import { PromoContainer } from '../components/promo';
import { PinkButton } from '../components/buttons';
import { PromoList } from '../page_data';
require('../page_data/globals');


const text = `<b>Дарим всем Новым Гостям “Обуительные Хонусы” на 1й, 2й, 3й, 5й и 7й депозиты.</b>

    <b>Начинай играть с нами и получай щедрые “Обуительные Хонусы” в награду за депозиты от 100 рублей!</b>
    
    5 «Обуительных Хонусов» для стремительного старта принесут удачу и овуительные хыигрыши!
    
    Все твои депозиты будут зачислены на основной денежный счет, а подарки приветственного пакета«ОПУИТЕЛЬНЫЙ ХАКЕТ» - на бонусный.
    
    На 1-й депозит – 110%.
    На 2-й депозит – 120%.
    На 3-й депозит – 150%.
    На 5-й депозит – 220%.
    На 7-й депозит – 330%.
    
    После регистрации в Клубе ты попадешь в Кассу, где сможешь активировать свой первый Первый Обуительный Хонус. Хонусы действительно Обуительные, потому что честные - сначала отыгрывается бонусный счет, а только потом реальный, вэйджер применяется только к бонусному счету! ОБУИТЕЛЬНЫЕ ХОНУСЫ за 2й, 3й, 5й и 7й депозиты будут доступны к активации по желанию после первого при каждом следующем пополнении счета.`;

const text2 = `<b>Условия приветственного пакета</b> 

    Чтобы перевести бонусные средства на свой основной игровой счет, их нужно отыграть (прокрутить в слотах) столько раз, сколько указано в колонке «Вейджер».`;

const Main = () => {
    return `
        <div class="someGlobalClass">
            ${Header()}
            
            <div class="container">
                <div class="bonus-heading-img">
                    <img src="./src/images/bonus.png"/>
                </div>
                
                <div class="bonus-heading-text">
                    «ОПУИТЕЛЬНЫЙ ХАКЕТ» от Клуба Casino AG!<br>
                    5 ОБУИТЕЛЬНЫХ ХОНУСОВ на 5 Депозитов!
                </div>
                
                <div class="bonus-container-inner">
                    ${Article(
                        '',
                        text,
                        'font-size:18px;line-height:28px;color:#58466F;'
                    )}  
                    
                    <div style="text-align:center;margin-bottom:40px">${PinkButton('победить')}</div>
                    
                    ${Article(
                        '',
                        text2,
                        'font-size:18px;line-height:28px;color:#58466F;'
                    )}  
                    
                    <table class="bonus-page-table">
                        <thead>
                            <tr>
                                <td>БОНУС</td>
                                <td>Сумма депозита</td>
                                <td>% Бонуса</td>
                                <td>Вейджер</td>
                                <td>Макс. Сумма бонуса</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Бонус на 1й депозит</td>
                                <td>от 100 рублей</td>
                                <td>110%</td>
                                <td>49</td>
                                <td>25000 рублей</td>
                            </tr>
                            <tr>
                                <td>Бонус на 2й депозит</td>
                                <td>от 100 рублей</td>
                                <td>120%</td>
                                <td>49</td>
                                <td>20000 рублей</td>
                            </tr>
                            <tr>
                                <td>Бонус на 3й депозит</td>
                                <td>от 100 рублей</td>
                                <td>150%</td>
                                <td>49</td>
                                <td>20000 рублей</td>
                            </tr>
                            <tr>
                                <td>Бонус на 4й депозит</td>
                                <td>от 100 рублей</td>
                                <td>220%</td>
                                <td>54</td>
                                <td>25000 рублей</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    ${Article(
                        '',
                        'Максимальная общая сумма вывода по пакету «ОПУИТЕЛЬНЫЙ ХАКЕТ»: 120000 руб;<br>' +
                            'Желаем Удачи в Игре и Овуительных Хыйграшей!',
                        'font-size:18px;line-height:28px;color:#58466F;'
                    )}  
                </div>    
            </div>
            
            <div class="container">
                ${Heading('акции')}
            
                ${PromoContainer(PromoList(3))}
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
