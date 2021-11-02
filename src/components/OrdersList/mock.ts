import gameItemMock, { paymentInfoMock } from 'components/GameItem/mock'
import { OrdersListProps } from '.'

const mock: OrdersListProps = {
  items: Array.from({ length: 5 }, () => ({
    ...gameItemMock,
    paymentInfo: paymentInfoMock,
    downloadLink: 'https://www.wongames.com/game/download/gasjhdgjashgdj'
  }))
}

export default mock
