import Link from 'next/link'

import { FavoriteBorder, Favorite } from '@styled-icons/material'
import { AddShoppingCart } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import Image from 'next/image'
import * as S from './styles'
import formatPrice from 'utils/format-price'
import getImageUrl from 'utils/getImageUrl'

export type GameCardProps = {
  slug: string
  title: string
  developer: string
  img: string
  price: number
  promotionalPrice?: number
  ribbon?: string
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
  favorite?: boolean
  onFav?: () => void
}

const GameCard = ({
  slug,
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
}: GameCardProps) => {
  return (
    <S.Wrapper>
      {ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}
      <Link href={`game/${slug}`} passHref>
        <S.ImageBox>
          <Image
            src={getImageUrl(img)}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </S.ImageBox>
      </Link>
      <S.Content>
        <Link href={`game/${slug}`} passHref>
          <S.Info>
            <S.Title>{title}</S.Title>
            <S.Developer>{developer}</S.Developer>
          </S.Info>
        </Link>
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
              {formatPrice(price)}
            </S.Price>
          )}
          <S.Price>
            {price > 0 ? formatPrice(promotionalPrice || price) : 'Free'}
          </S.Price>
          <Button icon={<AddShoppingCart />} size="small" />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameCard
