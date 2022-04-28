import { WishlistTemplateProps } from '.'

import gamesMock from 'components/GameCardSlider/mock'
import highlightsMock from 'components/Highlight/mock'

const mock: WishlistTemplateProps = {
  games: gamesMock,
  recommendedGames: {
    title: 'You Make like these games',
    highlighted: highlightsMock,
    games: gamesMock
  }
}

export default mock
