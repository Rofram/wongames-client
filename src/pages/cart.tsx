import CartTemplate from 'templates/Cart'
import type { CartTemplateProps } from 'templates/Cart'

import cartTemplateMock from 'templates/Cart/mock'
import { initializeApollo } from 'utils/apollo'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gameMapper } from 'utils/mappers'
import { GetServerSideProps, GetServerSidePropsResult } from 'next'
import Head from 'next/head'

export default function CartPage(props: CartTemplateProps) {
  return (
    <>
      <Head>
        <title>Wongames | Cart</title>
      </Head>
      <CartTemplate {...props} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<CartTemplateProps>
> => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      ...cartTemplateMock,
      recommendedGames: {
        title: data.recommended?.section?.title,
        games: gameMapper(data.recommended?.section?.games),
        highlighted: data.recommended?.section?.highlight
      }
    } as CartTemplateProps
  }
}
