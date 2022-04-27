import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { MockedProvider } from '@apollo/client/testing'

import GamesTemplate from '.'

import props from './mock'
import { QUERY_GAMES } from 'graphql/queries/games'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="ExploreSidebar">{children}</div>
  }
}))

jest.mock('components/GameCard', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="GameCard" />
  }
}))

jest.mock('@uiball/loaders', () => ({
  __esModule: true,
  Waveform: function Mock() {
    return <div data-testid="Waveform" />
  }
}))

const mocks = [
  {
    request: {
      query: QUERY_GAMES,
      variables: {
        limit: 15
      }
    },
    result: {
      data: {
        games: [
          {
            name: 'Game 1',
            slug: 'game-1',
            price: 0.99,
            developers: [
              {
                name: 'Developer 1'
              }
            ],
            cover: {
              url: 'https://via.placeholder.com/150'
            },
            __typename: 'Game'
          }
        ]
      }
    }
  }
]

describe('<Games />', () => {
  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={mocks} addTypename={false}>
        <GamesTemplate {...props} />
      </MockedProvider>
    )

    expect(screen.getByTestId('Base')).toBeInTheDocument()
    expect(screen.getByTestId('ExploreSidebar')).toBeInTheDocument()

    expect(await screen.findAllByTestId('GameCard')).toHaveLength(1)

    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render loading when starting template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <GamesTemplate {...props} />
      </MockedProvider>
    )

    expect(screen.getByTestId('Waveform')).toBeInTheDocument()
    expect(screen.queryByTestId('GameCard')).not.toBeInTheDocument()
  })
})
