import CartTemplate from 'templates/Cart'
import type { CartTemplateProps } from 'templates/Cart'

import cartTemplateMock from 'templates/Cart/mock'

export default function CartPage(props: CartTemplateProps) {
  return <CartTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: cartTemplateMock
  }
}
