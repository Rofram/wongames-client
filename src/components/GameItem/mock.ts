import { GameItemProps, PaymentInfoProps } from '.'

const mock: GameItemProps = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'The Witcher 3: Wild Hunt',
  price: '$50.00'
}

export const paymentInfoMock: PaymentInfoProps = {
  flag: 'mastercard',
  img: '/img/master-card.png',
  number: '**** **** **** 1234',
  purchaseDate: 'Purchase made on 05/01/2020 at 20:32'
}

export default mock
