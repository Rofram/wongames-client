import GamesTemplate from 'templates/Games'
import type { GamesTemplateProps } from 'templates/Games'

import { initializeApollo } from 'utils/apollo'

import exploreSidebarMock from 'components/ExploreSidebar/mock'
import { QUERY_GAMES } from 'graphql/queries/games'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import Head from 'next/head'

export default function GamesPage(props: GamesTemplateProps) {
  return (
    <>
      <Head>
        <title>Wongames | Explore</title>
      </Head>
      <GamesTemplate {...props} />
    </>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 15
    }
  })

  return {
    props: {
      revalidate: 60,
      initialApolloState: apolloClient.cache.extract(),
      filterItems: exploreSidebarMock
    }
  }
}
