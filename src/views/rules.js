import { Providers, Footer} from '../components/footer';
import Header from '../components/header';
import Heading from '../components/heading';
import Article from '../components/article';

const text1 = `1.1. Данные Общие Правила и Условия (далее именуемые «Правила и Условия») регулируют использование игр в онлайн-казино ARARAT GOLD (далее именуемое «Казино», «ARARAT GOLD», «Мы»), предоставленные на сайте www.ararat-gold.com (далее именуемый «Веб-сайт» или «Веб-сайт Казино»), а также по другим URL-адресам, принадлежащим компании Best Win B.V. Настоящие Правила и Условия, Политика конфиденциальности, Политика Cookies, условия рекламной кампании, правила о бонусах и специальных предложениях и любой другой документ, размещенный на Веб-сайте, составляют и регулируют договорные отношения между сторонами игрока (далее именуемые «Игрок» или «Вы») и Казино.

  1.2. Прежде чем принимать настоящие Правила и Условия, просим Вас внимательно их прочитать. Мы также рекомендуем Вам распечатать данные Правила и Условия для Ваших собственных записей. Если Вы не согласны с какими–либо Правилами и Условиями, пожалуйста, не принимайте данные Правила и Условия и не регистрируйте свою личную учетную игровую запись и / или не продолжайте использовать игры, представленные на Веб-сайте. Ваше дальнейшее использование Веб-сайта Казино будет означать Ваше согласие с настоящими Правилами и Условиями. Настоящие Правила и Условия вступают в силу с момента их публикации на Веб- сайте.

  1.3. Эти Правила и Условия применяются ко всем платформам и устройствам, которые позволяют Игроку получать доступ к играм.

  1.4. Текущая версия Правил и Условий всегда доступна на главной странице Веб-сайта. Казино настоятельно рекомендует периодически проверять Правила и Условия, чтобы быть уверенными, что Вы помните все правила, соглашаетесь с ними и принимаете их.

  1.5. Правила и Условия, а также Политика конфиденциальности вступают в силу после Вашего принятия их и подтверждения регистрационных данных во время регистрации игровой учетной записи на Веб-сайте. Принимая эти Правила и Условия, а также Политику конфиденциальности Вы также подтверждаете, что прочитали Правила и Условия, ровно как и приняли нашу Политику конфиденциальности, которая описывает как Казино будет собирать, обрабатывать и делиться Вашей личной информацией.

  1.6. Текст Правил и Условий составлен на русском языке, и имеет юридическую силу. Перевод Правил и Условий на любой другой язык осуществляется исключительно в информационных целях. В случае любого противоречия или несоответствия между текстом на русском языке и любой другой языковой версией, текст Правил и Условий на русском языке имеет преимущественную силу.`;

const text3 = `3.1. Казино сохраняет за собой право периодически вносить правки, дополнения и / или изменения в настоящие Правила и Условия, чтоб соответствовать требованиям и положениям действующего законодательства. Казино обязуется уведомить Игрока о внесенных изменениях во время его авторизации на Веб-сайте, и Игрок обязуется рассмотреть измененные Правила и Условия. Продолжая использовать Веб-сайт, Игрок соглашается с данными Правилами и Условиями, также как и с последними изменениями к ним.

  3.2. Любая поправка, дополнение и / или изменение Правил и Условий вступает в силу с момента их размещения на Веб-сайте. Поэтому, Игроку рекомендуется регулярно и внимательно просматривать Правила и Условия, а также правила отдельных игр и другую информацию, которая будет доступна и размещена на Веб-сайте.

  3.3. Если Игрок не согласен с поправками, дополнениями и / или изменениями, внесенными в Правила и Условия, он имеет право расторгнуть соглашение с Казино, то есть прекратить использование Веб-сайта и удалить игровую учетную запись в соответствии с Политикой Конфиденциальности.`;

const Main = () => {
    return `
        <div class="someGlobalClass">
            ${Header()}
            
            <div class="container">
                ${Heading('правила и условия')}
            </div>
            
            <div class="container">
                <div class="rules-container-inner">
                    ${Article(
                      'ВВЕДЕНИЕ',
                      text1
                    )}
                    
                    ${Article(
                'СТОРОНЫ И ИНФОРМАЦИЯ О ЛИЦЕНЗИИ',
                    '2.1. Веб-сайт управляется компанией Best Win BV, зарегистрированной Heelsumstraat 51, Curacao, CW. Best Win B.V. действует на основании лицензии Кюрасао 8031/JAZ и регулируется Центральным правительством Нидерландских Антильских островов.'
                  )}
                              
                  ${Article(
                    'ИЗМЕНЕНИЕ ПРАВИЛ И УСЛОВИЙ',
                    text3
                  )}
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
