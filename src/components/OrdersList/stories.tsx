import { Story, Meta } from '@storybook/react'
import OrdersList, { OrdersListProps } from '.'

import ordersListMock from 'components/OrdersList/mock'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: ordersListMock
} as Meta

export const Default: Story<OrdersListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
)
