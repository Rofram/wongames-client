import { GameCardProps } from 'components/GameCard'

const mock: GameCardProps[] = Array.from({ length: 10 }, () => ({
  slug: 'population-zero',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x145',
  price: 235,
  promotionalPrice: 215
}))

export default mock
