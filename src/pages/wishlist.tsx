import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

import wishlistMock from 'templates/Wishlist/mock'

export default function Index(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  return {
    props: wishlistMock
  }
}
