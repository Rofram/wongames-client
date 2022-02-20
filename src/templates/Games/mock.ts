import type { GamesTemplateProps } from '.'

import gameCardMock from 'components/GameCard/mock'
import exploreSidebarMock from 'components/ExploreSidebar/mock'

const mock: GamesTemplateProps = {
  games: Array.from({ length: 10 }, () => gameCardMock),
  filterItems: exploreSidebarMock
}

export default mock
