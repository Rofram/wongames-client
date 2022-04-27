import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined'
import { Waveform } from '@uiball/loaders'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard from 'components/GameCard'
import { Grid } from 'components/Grid'
import { useQueryGames } from 'hooks/useQueryGames'
import Base from 'templates/Base'
import { gameMapper } from 'utils/mappers'
import * as S from './styles'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data, loading, fetchMore } = useQueryGames({
    variables: {
      limit: 15
    }
  })

  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    fetchMore({
      variables: {
        start: data?.games.length,
        limit: 15
      }
    })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        {loading ? (
          <S.Loading>
            <Waveform color="white" size={80} />
          </S.Loading>
        ) : (
          <section>
            <Grid>
              {gameMapper(data?.games)!.map((game) => (
                <GameCard key={game.slug} {...game} />
              ))}
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show more</p>
              <ArrowDown size={35} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
