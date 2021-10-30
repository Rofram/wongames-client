import { Story, Meta } from '@storybook/react'
import CartList, { CartListProps } from '.'

import cartListMock from './mock'

export default {
  title: 'CartList',
  component: CartList,
  args: cartListMock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800, margin: '0 auto' }}>
    <CartList {...args} />
  </div>
)
