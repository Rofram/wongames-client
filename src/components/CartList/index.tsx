import GameItem, { GameItemProps } from 'components/GameItem'
import * as S from './styles'

export type CartListProps = {
  items: GameItemProps[]
  total: string
}

const CartList = ({ items, total }: CartListProps) => (
  <S.Wrapper>
    {items.map((item, index) => (
      <GameItem key={`${item.title}-${index}`} {...item} />
    ))}

    <S.Footer>
      <p>Total</p> <S.Total>{total}</S.Total>
    </S.Footer>
  </S.Wrapper>
)

export default CartList
