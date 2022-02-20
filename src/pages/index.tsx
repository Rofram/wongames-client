import type { GetStaticProps, GetStaticPropsResult } from 'next'
import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'
import HomeTemplate from 'templates/Home'
import type { HomeTemplateProps } from 'templates/Home'

import { initializeApollo } from 'utils/apollo'

export default function Index(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<HomeTemplateProps>
> => {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome>({
    query: QUERY_HOME
  })

  return {
    props: {
      revalidate: 60,
      banners: banners.map((banner) => ({
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
      })),
      sectionNewsGames: {
        title: sections?.newGames?.title,
        highlight: sections?.newGames?.highlight,
        games: newGames.map((game) => ({
          slug: game.slug,
          title: game.name,
          developer: game.developers[0].name,
          img: game.cover?.url,
          price: game.price
        }))
      },
      sectionMostPopular: {
        title: sections?.popularGames?.title,
        highlight: sections?.popularGames?.highlight,
        games: sections?.popularGames?.games.map((game) => ({
          slug: game.slug,
          title: game.name,
          developer: game.developers[0].name,
          img: game.cover?.url,
          price: game.price
        }))
      },
      sectionUpcoming: {
        title: sections?.upcomingGames?.title,
        highlight: sections?.upcomingGames?.highlight,
        games: upcomingGames.map((game) => ({
          slug: game.slug,
          title: game.name,
          developer: game.developers[0].name,
          img: game.cover?.url,
          price: game.price
        }))
      },
      sectionFreeGames: {
        title: sections?.freeGames?.title,
        highlight: sections?.freeGames?.highlight,
        games: freeGames.map((game) => ({
          slug: game.slug,
          title: game.name,
          developer: game.developers[0].name,
          img: game.cover?.url,
          price: game.price
        }))
      }
    } as HomeTemplateProps
  }
}
