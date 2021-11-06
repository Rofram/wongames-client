import HomeTemplate, { HomeTemplateProps } from 'templates/Home'

import homePropsMock from 'templates/Home/mock'

export default function Index(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
}

export function getStaticProps() {
  return {
    props: homePropsMock
  }
}
