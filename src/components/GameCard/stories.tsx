import { Story, Meta } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

import gameCardMock from './mock'

export default {
  title: 'GameCard',
  component: GameCard,
  args: gameCardMock,
  argTypes: {
    onFav: { action: 'clicked' }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonColor: 'primary',
  ribbonSize: 'small'
}
