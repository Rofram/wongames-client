import Home, { HomeTemplateProps } from 'templates/Home'

import homePropsMock from 'templates/Home/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getStaticProps() {
  return {
    props: homePropsMock
  }
}
