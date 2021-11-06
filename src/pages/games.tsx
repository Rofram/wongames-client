import GamesTemplate, { GamesTemplateProps } from 'templates/Games'

import gamesTemplateMock from 'templates/Games/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: gamesTemplateMock
  }
}
