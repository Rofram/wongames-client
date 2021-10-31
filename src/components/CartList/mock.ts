import { CartListProps } from '.'

import gameItemMock, { paymentInfoMock } from 'components/GameItem/mock'

const mock: CartListProps = {
  items: Array.from({ length: 5 }, () => gameItemMock),
  total: '$250,00'
}

export const withPaymentInfo: CartListProps = {
  items: Array.from({ length: 5 }, () => ({
    ...gameItemMock,
    paymentInfo: paymentInfoMock
  })),
  total: '$300,00'
}

export default mock
