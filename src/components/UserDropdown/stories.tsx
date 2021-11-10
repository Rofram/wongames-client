import { Story, Meta } from '@storybook/react'
import UserDropdown, { UserDropdownProps } from '.'

export default {
  title: 'UserDropdown',
  component: UserDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    username: 'Rodrigo'
  }
} as Meta

export const Default: Story<UserDropdownProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'flex-end', maxWidth: '98%' }}>
    <UserDropdown {...args} />
  </div>
)
