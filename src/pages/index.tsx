import type { GetStaticProps, GetStaticPropsResult } from 'next'
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'
import HomeTemplate from 'templates/Home'
import type { HomeTemplateProps } from 'templates/Home'

import { initializeApollo } from 'utils/apollo'
import { bannerMapper, gameMapper } from 'utils/mappers'

export default function Index(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<HomeTemplateProps>
> => {
  const apolloClient = initializeApollo()
  const today = new Date().toISOString().slice(0, 10) // 2022-02-23

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: {
      date: today
    }
  })

  return {
    props: {
      revalidate: 60,
      banners: bannerMapper(banners),
      sectionNewsGames: {
        title: sections?.newGames?.title,
        highlight: sections?.newGames?.highlight,
        games: gameMapper(newGames)
      },
      sectionMostPopular: {
        title: sections?.popularGames?.title,
        highlight: sections?.popularGames?.highlight,
        games: gameMapper(sections?.popularGames?.games)
      },
      sectionUpcoming: {
        title: sections?.upcomingGames?.title,
        highlight: sections?.upcomingGames?.highlight,
        games: gameMapper(upcomingGames)
      },
      sectionFreeGames: {
        title: sections?.freeGames?.title,
        highlight: sections?.freeGames?.highlight,
        games: gameMapper(freeGames)
      }
    } as HomeTemplateProps
  }
}
