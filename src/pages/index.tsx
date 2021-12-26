import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'
import HomeTemplate, { HomeTemplateProps } from 'templates/Home'

import { initializeApollo } from 'utils/apollo'

import gameCardSliderMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryHome>({
    query: QUERY_HOME
  })

  return {
    props: {
      revalidate: 60,
      banners: data.banners.map((banner) => ({
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
      newsGames: data.newGames.map((game) => ({
        slug: game.slug,
        title: game.name,
        developer: game.developers[0].name || '',
        img: game.cover?.url,
        price: game.price
      })),
      mostPopularHighlight: highlightMock,
      mostPopularGames: gameCardSliderMock,
      upcomingGames: data.upcomingGames.map((game) => ({
        slug: game.slug,
        title: game.name,
        developer: game.developers[0].name || 'desconhecido',
        img: game.cover?.url,
        price: game.price
      })),
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gameCardSliderMock,
      FreeGames: gameCardSliderMock,
      FreeGamesHighlight: highlightMock
    }
  }
}
