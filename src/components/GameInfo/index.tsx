import { AddShoppingCart } from '@styled-icons/material-outlined'
import { FavoriteBorder } from '@styled-icons/material'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import * as S from './styles'
import formatPrice from 'utils/format-price'

export type GameInfoProps = {
  title: string
  description: string
  price: number
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button icon={<AddShoppingCart />}>Add to cart</Button>
      <Button minimal icon={<FavoriteBorder aria-label="Add to Wishlist" />}>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
