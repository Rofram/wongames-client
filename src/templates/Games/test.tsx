import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GamesTemplate from '.'

import props from './mock'

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

describe('<Games />', () => {
  it('should render sections', () => {
    renderWithTheme(<GamesTemplate {...props} />)

    expect(screen.getByTestId('Base')).toBeInTheDocument()
    expect(screen.getByTestId('ExploreSidebar')).toBeInTheDocument()
    expect(screen.getAllByTestId('GameCard')).toHaveLength(props.games!.length)

    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })
})
