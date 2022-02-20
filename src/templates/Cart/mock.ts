import type { CartTemplateProps } from '.'

import gamesMock from 'components/GameCardSlider/mock'
import highlightsMock from 'components/Highlight/mock'
import cartListMock from 'components/CartList/mock'
import creditCardsMock from 'components/PaymentOptions/mock'

const mock: CartTemplateProps = {
  recommendedGames: gamesMock,
  recommendedHighlighted: highlightsMock,
  items: cartListMock.items.slice(0, 2),
  total: cartListMock.total,
  cards: creditCardsMock
}

export default mock
