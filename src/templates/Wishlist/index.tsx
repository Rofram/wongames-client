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
  recommendedGames: GameCardProps[]
  recommendedHighlightedGames: HighlightProps
}

const Wishlist = ({
  games = [],
  recommendedGames,
  recommendedHighlightedGames
}: WishlistTemplateProps) => (
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
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlightedGames}
    />
  </Base>
)

export default Wishlist
