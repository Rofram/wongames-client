import { initializeApollo } from 'utils/apollo'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { GetStaticProps, GetStaticPropsResult } from 'next'
import { gameMapper } from 'utils/mappers'

import WishlistTemplate from 'templates/Wishlist'
import type { WishlistTemplateProps } from 'templates/Wishlist'

import wishlistMock from 'templates/Wishlist/mock'
import Head from 'next/head'

export default function Index(props: WishlistTemplateProps) {
  return (
    <>
      <Head>
        <title>Wongames | Wishlist</title>
      </Head>
      <WishlistTemplate {...props} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<WishlistTemplateProps>
> => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      games: wishlistMock.games,
      recommendedGames: {
        title: data.recommended?.section?.title,
        games: gameMapper(data.recommended?.section?.games),
        highlighted: data.recommended?.section?.highlight
      }
    } as WishlistTemplateProps
  }
}
