import { Story, Meta } from '@storybook/react'
import Radio, { RadioProps } from '.'

export default {
  title: 'Form/Radio',
  component: Radio,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        label="primeiro"
        id="primeiro"
        name="nome"
        value="primeiro"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="segundo"
        id="segundo"
        name="nome"
        value="segundo"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="terceiro"
        id="terceiro"
        name="nome"
        value="terceiro"
        {...args}
      />
    </div>
  </>
)
