import Button from 'components/Button'
import Empty from 'components/Empty'
import GameItem, { GameItemProps } from 'components/GameItem'
import Link from 'next/link'
import * as S from './styles'

export type CartListProps = {
  items?: GameItemProps[]
  total?: string
  hasButton?: boolean
}

const CartList = ({ items = [], total, hasButton = false }: CartListProps) => (
  <S.Wrapper isEmpty={!items.length}>
    {items.length ? (
      <>
        {items.map((item, index) => (
          <GameItem key={`${item.title}-${index}`} {...item} />
        ))}

        <S.Footer>
          {hasButton ? (
            <>
              <S.Total>{total}</S.Total>{' '}
              <Link href="/cart" passHref>
                <Button aria-label="Buy it now" as="a">
                  Buy it now
                </Button>
              </Link>
            </>
          ) : (
            <>
              <span>Total</span> <S.Total>{total}</S.Total>
            </>
          )}
        </S.Footer>
      </>
    ) : (
      <Empty
        title="Your cart is Empty"
        description="Go back to the store and explore great games and offers"
        color="black"
        hasLink
      />
    )}
  </S.Wrapper>
)

export default CartList
