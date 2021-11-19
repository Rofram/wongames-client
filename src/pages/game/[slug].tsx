import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import { initializeApollo } from 'utils/apollo'
import Game, { GameTemplateProps } from 'templates/Game'

import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'
import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from 'graphql/generated/QueryGameBySlug'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null // TODO: loading

  return <Game {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 9
    }
  })

  const paths = data.games.map(({ slug }) => ({
    params: {
      slug
    }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
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

  return {
    props: {
      revalidate: 60,
      cover: `http://localhost:1337${game.cover?.src}`,
      gameInfo: {
        title: game.name,
        description: game.short_description,
        price: game.price
      },
      gallery: game.gallery.map(({ src, label }) => ({
        src: `http://localhost:1337${src}`,
        alt: label
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map(({ name }) => name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map(({ name }) => name)
      },
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      recommendedGames: gamesMock
    }
  }
}
