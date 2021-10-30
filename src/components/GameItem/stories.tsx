import { Story, Meta } from '@storybook/react'
import GameItem, { GameItemProps } from '.'

import gameItemMock from './mock'

export default {
  title: 'GameItem',
  component: GameItem,
  args: gameItemMock
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />

export const WithPayment: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
)

WithPayment.args = {
  downloadLink: 'https:wongames.com/game/download/akgfjagfjkdasgfj',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/master-card.png',
    number: '**** **** **** 1234',
    purchaseDate: 'Purchase made on 05/01/2020 at 20:32'
  }
}
