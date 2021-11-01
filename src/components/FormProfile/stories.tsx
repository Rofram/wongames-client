import { Story, Meta } from '@storybook/react'
import FormProfile from '.'

export default {
  title: 'Form/FormProfile',
  component: FormProfile
} as Meta

export const Default: Story = () => (
  <div style={{ margin: 'auto', maxWidth: 860 }}>
    <FormProfile />
  </div>
)
