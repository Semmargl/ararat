import { Providers, Footer} from '../components/footer';
import Header from '../components/header';
import Heading from '../components/heading';
import Article from '../components/article';
import Table from '../components/table';
import { PromoContainer } from '../components/promo';
import { PromoList } from '../page_data';

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
