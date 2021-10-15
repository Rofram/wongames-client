import { Story, Meta } from '@storybook/react'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
    <Checkbox isChecked {...args} label="Action" labelFor="Action" />
    <Checkbox {...args} label="Adventure" labelFor="Adventure" />
    <Checkbox {...args} label="Strategy" labelFor="Strategy" />
  </div>
)
