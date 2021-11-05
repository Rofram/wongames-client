import { Story, Meta } from '@storybook/react'
import GameInfo, { GameInfoProps } from '.'

import gameInfoMock from './mock'

export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  args: gameInfoMock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem', margin: '0 auto' }}>
    <GameInfo {...args} />
  </div>
)
