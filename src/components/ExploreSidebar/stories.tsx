import { Story, Meta } from '@storybook/react'
import ExploreSidebar, { ExploreSidebarProps } from '.'

import exploreSidebarMock from './mock'

export default {
  title: 'Explore/ExploreSidebar',
  component: ExploreSidebar,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    items: exploreSidebarMock,
    onFilter: () => console.log('onFilter')
  }
} as Meta

export const Default: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar {...args} />
  </div>
)

export const WithDefaultValues: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar {...args} />
  </div>
)

WithDefaultValues.args = {
  initialValues: {
    platforms: ['windows', 'linux'],
    sort_by: 'low-to-high'
  }
}
