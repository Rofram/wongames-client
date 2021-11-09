import { CartListProps } from '.'

import gameItemMock, { paymentInfoMock } from 'components/GameItem/mock'

const mock: Required<CartListProps> = {
  items: Array.from({ length: 4 }, () => gameItemMock),
  total: '$250,00',
  hasButton: false
}

export const withPaymentInfo: CartListProps = {
  items: Array.from({ length: 4 }, () => ({
    ...gameItemMock,
    paymentInfo: paymentInfoMock
  })),
  total: '$300,00'
}

export default mock
