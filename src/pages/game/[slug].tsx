import Game, { GameTemplateProps } from 'templates/Game'

import gameTemplateMock from 'templates/Game/mock'

export default function Index(props: GameTemplateProps) {
  return <Game {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'cyberpunk2077' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  return {
    props: gameTemplateMock
  }
}
