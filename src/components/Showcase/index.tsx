import { GameCardProps } from 'components/GameCard'
import GameCardSlider, { SliderArrowColor } from 'components/GameCardSlider'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
  sliderArrowColor?: SliderArrowColor
}

const Showcase = ({
  title,
  highlight,
  games,
  sliderArrowColor = 'white'
}: ShowcaseProps) => (
  <S.Wrapper>
    {title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    {highlight && <Highlight {...highlight} />}
    {games && <GameCardSlider items={games} color={sliderArrowColor} />}
  </S.Wrapper>
)

export default Showcase
