import Base from 'templates/Base'

import Heading from 'components/Heading'
import { Container } from 'components/Container'
import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'
import GameCard, { GameCardProps } from 'components/GameCard'
import type { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import Empty from 'components/Empty'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: {
    title: string
    games?: GameCardProps[] | null
    highlighted?: HighlightProps | null
  }
}

const Wishlist = ({ games = [], recommendedGames }: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games.length > 0 ? (
        <Grid>
          {games.map((game, index) => (
            <GameCard key={`wishlist-${index}`} {...game} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your wishlist will appear here"
          hasLink
        />
      )}

      <Divider />
    </Container>

    <Showcase
      title={recommendedGames.title}
      games={recommendedGames.games}
      highlight={recommendedGames.highlighted}
    />
  </Base>
)

export default Wishlist
