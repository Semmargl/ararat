import { PinkButton, RedButton } from "../components/buttons";

export const PromoList = (max) => {
  const arr = [
    {
      image: './src/images/promo/promo_1.png',
      imageMob: './src/images/promo/promo_2_m.png',
      heading: 'Каждую пятницу кешбек 5%',
      text: 'Клуб Арарат Голд дарит всем Новым Гостям отличный подарок на первый депозит. Начинай играть с нами, получай щедрый бонус автоматически на первый депозит и проверь свою удачу!',
      button: PinkButton('победить')
    },

    {
      image: './src/images/promo/promo_2.png',
      imageMob: './src/images/promo/promo_1_m.png',
      heading: '500 рублей без депозита – Акция GET LUCKY с NETENT на Арарат Голд!',
      text: 'Играть и выиграть – вот основная цель любого посетителя клуба!.Испытайте свою удачу на автоматах',
      button: RedButton('победить')
    },

    {
      image: './src/images/promo/promo_3.png',
      imageMob: './src/images/promo/promo_3_m.png',
      heading: '«Золотой Трамплин» от Клуба Арарат Голд!',
      text: 'Клуб Арарат Голд дарит всем Новым Гостям отличный подарок на первый депозит. Начинай играть с нами, получай щедрый бонус автоматически на первый депозит и проверь свою удачу!',
      button: RedButton('победить')
    },

    {
      image: './src/images/promo/promo_4.png',
      imageMob: './src/images/promo/promo_2_m.png',
      heading: 'Каждую пятницу кешбек 5%',
      text: 'Клуб Арарат Голд дарит всем Новым Гостям отличный подарок на первый депозит. Начинай играть с нами, получай щедрый бонус автоматически на первый депозит и проверь свою удачу!',
      button: PinkButton('победить')
    },

    {
      image: './src/images/promo/promo_5.png',
      imageMob: './src/images/promo/promo_2_m.png',
      heading: '500 рублей без депозита – Акция GET LUCKY с NETENT на Арарат Голд!',
      text: 'Играть и выиграть – вот основная цель любого посетителя клуба!.Испытайте свою удачу на автоматах',
      button: RedButton('победить')
    },

    {
      image: './src/images/promo/promo_6.png',
      imageMob: './src/images/promo/promo_2_m.png',
      heading: '«Золотой Трамплин» от Клуба Арарат Голд!',
      text: 'Клуб Арарат Голд дарит всем Новым Гостям отличный подарок на первый депозит. Начинай играть с нами, получай щедрый бонус автоматически на первый депозит и проверь свою удачу!',
      button: RedButton('победить')
    }
  ]

  return arr.slice(0, max)
}