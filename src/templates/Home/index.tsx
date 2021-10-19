import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'

import Base from 'templates/Base'
import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newsGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingMoreGames: GameCardProps[]
  FreeGames: GameCardProps[]
  FreeGamesHighlight: HighlightProps
}

const Home = ({
  banners,
  newsGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames,
  FreeGames,
  FreeGamesHighlight
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="News" games={newsGames} />
    </S.SectionNews>

    <Showcase
      title="Most Popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <S.SectionUpcoming>
      <Showcase title="Upcoming" games={upcomingGames} />
      <Showcase highlight={upcomingHighlight} games={upcomingMoreGames} />
    </S.SectionUpcoming>

    <Showcase
      title="Free games"
      highlight={FreeGamesHighlight}
      games={FreeGames}
    />
  </Base>
)

export default Home
