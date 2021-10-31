import Cart, { CartTemplateProps } from 'templates/Cart'

import cartTemplateMock from 'templates/Cart/mock'

export default function CartPage(props: CartTemplateProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: cartTemplateMock
  }
}
