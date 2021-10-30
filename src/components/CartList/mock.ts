import { CartListProps } from '.'

import gameItemMock, { paymentInfoMock } from 'components/GameItem/mock'

const mock: CartListProps = {
  items: Array.from({ length: 5 }, () =>
    Object.assign(gameItemMock, { paymentInfo: paymentInfoMock })
  ),
  total: '$250,00'
}

export default mock
