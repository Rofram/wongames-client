import { Story, Meta } from '@storybook/react'
import Empty, { EmptyProps } from '.'

import emptyMock from './mock'

export default {
  title: 'Empty',
  component: Empty,
  args: {
    ...emptyMock,
    hasLink: true
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<EmptyProps> = (args) => <Empty {...args} />
