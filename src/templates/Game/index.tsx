import Base from 'templates/Base'

import GameInfo, { GameInfoProps } from 'components/GameInfo'
import Gallery, { GalleryImgProps } from 'components/Gallery'

import * as S from './styles'
import React from 'react'
import TextContent from 'components/TextContent'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImgProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="img" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      {gallery && (
        <S.SectionGallery>
          <Gallery items={gallery} />
        </S.SectionGallery>
      )}

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />
      </S.SectionGameDetails>

      <Showcase
        title="Upcoming"
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase title="You may like these games" games={recommendedGames} />
    </S.Main>
  </Base>
)

export default Game
