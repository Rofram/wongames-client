import { Story, Meta } from '@storybook/react'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Form/Checkbox',
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
    <Checkbox isChecked {...args} label="Action" />
    <Checkbox {...args} label="Adventure" />
    <Checkbox {...args} label="Strategy" />
  </div>
)
