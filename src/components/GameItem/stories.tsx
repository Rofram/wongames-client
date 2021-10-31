import { Story, Meta } from '@storybook/react'
import GameItem, { GameItemProps } from '.'

import gameItemMock, { paymentInfoMock } from './mock'

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
  downloadLink: 'https://wongames.com/game/download/akgfjagfjkdasgfj',
  paymentInfo: paymentInfoMock
}
