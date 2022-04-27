import { useRouter } from 'next/router'
import type { GetStaticProps, GetStaticPropsResult } from 'next'
import { initializeApollo } from 'utils/apollo'
import GameTemplate from 'templates/Game'
import type { GameTemplateProps } from 'templates/Game'

import type {
  QueryGames,
  QueryGamesVariables
} from 'graphql/generated/QueryGames'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import type {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from 'graphql/generated/QueryGameBySlug'

import { gameMapper } from 'utils/mappers'
import highlightMock from 'components/Highlight/mock'
import type { QueryRecommended } from 'graphql/generated/QueryRecommended'
import type {
  QueryUpcoming,
  QueryUpcomingVariables
} from 'graphql/generated/QueryUpcoming'
import { QUERY_UPCOMING } from 'graphql/queries/upcoming'
import Head from 'next/head'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null // TODO: loading

  return (
    <>
      <Head>
        <title>{props.gameInfo.title} on Wongames</title>
      </Head>
      <GameTemplate {...props} />
    </>
  )
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 15
    }
  })

  const paths = data.games.map(({ slug }) => ({
    params: {
      slug
    }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({
  params
}): Promise<GetStaticPropsResult<GameTemplateProps>> => {
  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: {
      slug: `${params?.slug}`
    }
  })

  if (!data.games.length) {
    return { notFound: true }
  }

  const game = data.games[0]

  const { data: recommendedData } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  const today = new Date(2020, 10, 17).toISOString().slice(0, 10)

  const { data: upcomingData } = await apolloClient.query<
    QueryUpcoming,
    QueryUpcomingVariables
  >({
    query: QUERY_UPCOMING,
    variables: {
      date: today
    }
  })

  return {
    props: {
      revalidate: 60,
      cover: game.cover?.src,
      gameInfo: {
        title: game.name,
        description: game.short_description,
        price: game.price
      },
      gallery: game.gallery.map(({ src, label }) => ({
        src: src,
        alt: label
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map(({ name }) => name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map(({ name }) => name!)
      },
      upcomingGames: {
        title: 'Upcoming Games',
        games: gameMapper(upcomingData.games),
        highlight: upcomingData.home?.upcomingGames?.highlight
      },
      upcomingHighlight: highlightMock,
      recommendedGames: {
        title: recommendedData.recommended?.section?.title,
        highlight: recommendedData.recommended?.section?.highlight,
        games: gameMapper(recommendedData.recommended?.section?.games)
      }
    } as GameTemplateProps
  }
}
