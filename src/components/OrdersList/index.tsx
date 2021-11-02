import Empty from 'components/Empty'
import GameItem, { GameItemProps } from 'components/GameItem'
import Heading from 'components/Heading'

import * as S from './styles'

export type OrdersListProps = {
  items?: GameItemProps[]
}

const OrdersList = ({ items = [] }: OrdersListProps) => (
  <S.Wrapper>
    <Heading lineBottom size="small" color="black">
      My orders
    </Heading>

    {items.length > 0 ? (
      items.map((item, index) => (
        <GameItem key={`${item.title}-${index}`} {...item} />
      ))
    ) : (
      <Empty
        title="You have no orders yet"
        description="Go back to the store and explore great games and offers"
        hasLink
        color="black"
      />
    )}
  </S.Wrapper>
)

export default OrdersList
