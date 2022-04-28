import type { BannerProps } from 'components/Banner'
import type { GameCardProps } from 'components/GameCard'
import type { GameFragment } from 'graphql/generated/GameFragment'
import type { QueryHome_banners } from 'graphql/generated/QueryHome'

export const bannerMapper = (banners: QueryHome_banners[]): BannerProps[] => {
  return banners.map((banner) => ({
    img: banner.image?.url,
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button?.label,
    buttonLink: banner.button?.link,
    ...(banner.ribbon && {
      ribbon: banner.ribbon.text,
      ribbonColor: banner.ribbon.color,
      ribbonSize: banner.ribbon.size
    })
  })) as BannerProps[]
}

export const gameMapper = (
  games: GameFragment[] | null | undefined
): GameCardProps[] | null => {
  if (!games) {
    return null
  }

  return games.map((game) => ({
    slug: game.slug,
    title: game.name,
    developer: game.developers[0]?.name ?? 'desconhecido',
    img: game.cover?.url,
    price: game.price
  })) as GameCardProps[]
}
