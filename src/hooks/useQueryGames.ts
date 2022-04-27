import { QueryHookOptions, useQuery } from '@apollo/client'
import type {
  QueryGames,
  QueryGamesVariables
} from 'graphql/generated/QueryGames'
import { QUERY_GAMES } from 'graphql/queries/games'

export function useQueryGames(
  options?: QueryHookOptions<QueryGames, QueryGamesVariables>
) {
  return useQuery<QueryGames, QueryGamesVariables>(QUERY_GAMES, options)
}
