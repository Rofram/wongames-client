import { Story, Meta } from '@storybook/react'
import GameDetails, { GameDetailsProps } from '.'

import gameDetailsMock from './mock'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: gameDetailsMock,
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    },
    releaseDate: {
      control: {
        type: 'date'
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Action', 'Adventure', 'Role-playing', 'FPS', 'Strategy']
      }
    }
  }
} as Meta

export const Default: Story<GameDetailsProps> = (args) => (
  <div style={{ margin: '0 auto', maxWidth: '130rem' }}>
    <GameDetails {...args} />
  </div>
)
