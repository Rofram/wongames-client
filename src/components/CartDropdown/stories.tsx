import { Story, Meta } from '@storybook/react'
import CartDropdown, { CartDropdownProps } from '.'

import cartDropdownMock from './mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  args: cartDropdownMock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CartDropdownProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'flex-end', maxWidth: '98%' }}>
    <CartDropdown {...args} />
  </div>
)

export const Empty: Story<CartDropdownProps> = () => (
  <div style={{ display: 'flex', justifyContent: 'flex-end', maxWidth: '98%' }}>
    <CartDropdown />
  </div>
)
