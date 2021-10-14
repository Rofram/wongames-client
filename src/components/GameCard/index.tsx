import { FavoriteBorder, Favorite } from '@styled-icons/material'
import { AddShoppingCart } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import Image from 'next/image'
import * as S from './styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  ribbon?: string
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
  favorite?: boolean
  onFav?: () => void
}

const GameCard = ({
  title,
  developer,
  img,
  price,
  promotionalPrice,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
  favorite = false,
  onFav
}: GameCardProps) => (
  <S.Wrapper>
    {ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <S.ImageBox>
      <Image src={img} alt={title} layout="fill" objectFit="cover" />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>
      <S.FavButton role="button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </S.FavButton>
      <S.BuyBox>
        {promotionalPrice && (
          <S.Price aria-label="Promotional Price" isPromotional>
            {price}
          </S.Price>
        )}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
