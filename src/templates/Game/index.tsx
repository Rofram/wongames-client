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
import { Divider } from 'components/Divider'
import getImageUrl from 'utils/getImageUrl'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImgProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: {
    title: string
    games: GameCardProps[]
    highlight: HighlightProps
  }
  recommendedGames: {
    title: string
    games?: GameCardProps[] | null
    highlighted?: HighlightProps | null
  }
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={getImageUrl(cover)} role="img" aria-label="cover" />

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

        <Divider />
      </S.SectionGameDetails>

      <Showcase
        title={upcomingGames.title}
        games={upcomingGames.games}
        highlight={upcomingGames.highlight}
      />

      <Showcase
        title={recommendedGames.title ?? 'You Make like these games'}
        highlight={recommendedGames.highlighted}
        games={recommendedGames.games}
      />
    </S.Main>
  </Base>
)

export default Game
