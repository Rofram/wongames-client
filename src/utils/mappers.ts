import { GameFragment } from 'graphql/generated/GameFragment'
import type { QueryHome_banners } from 'graphql/generated/QueryHome'

export const bannerMapper = (banners: QueryHome_banners[]) => {
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
  }))
}

export const gameMapper = (games: GameFragment[] | null | undefined) => {
  if (!games) {
    return []
  }

  return games.map((game) => ({
    slug: game.slug,
    title: game.name,
    developer: game.developers[0].name,
    img: game.cover?.url,
    price: game.price
  }))
}
