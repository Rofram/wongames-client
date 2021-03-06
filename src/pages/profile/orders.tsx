import Profile from 'templates/Profile'

import OrdersList from 'components/OrdersList'
import type { OrdersListProps } from 'components/OrdersList'

import ordersListMock from 'components/OrdersList/mock'

export default function ProfileCards({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export async function getServerSideProps() {
  return {
    props: ordersListMock
  }
}
