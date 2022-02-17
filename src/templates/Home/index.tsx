import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'

import Base from 'templates/Base'
import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'

type SectionProps = {
  title: string
  highlight?: HighlightProps
  games?: GameCardProps[]
}

export type HomeTemplateProps = {
  banners: BannerProps[]
  sectionNewsGames: SectionProps
  sectionMostPopular: SectionProps
  sectionUpcoming: SectionProps
  sectionFreeGames: SectionProps
}

const Home = ({
  banners,
  sectionNewsGames,
  sectionMostPopular,
  sectionUpcoming,
  sectionFreeGames
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase
        title={sectionNewsGames.title}
        highlight={sectionNewsGames.highlight}
        games={sectionNewsGames.games}
        sliderArrowColor="black"
      />
    </S.SectionNews>

    <Showcase
      title={sectionMostPopular.title}
      highlight={sectionMostPopular.highlight}
      games={sectionMostPopular.games}
    />

    <Showcase
      title={sectionUpcoming.title}
      highlight={sectionUpcoming.highlight}
      games={sectionUpcoming.games}
    />

    <Showcase
      title={sectionFreeGames.title}
      highlight={sectionFreeGames.highlight}
      games={sectionFreeGames.games}
    />
  </Base>
)

export default Home
