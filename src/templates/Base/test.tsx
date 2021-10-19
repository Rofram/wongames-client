import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Base from '.'

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Menu" />
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Footer" />
    }
  }
})

describe('<Base />', () => {
  it('should render menu, footer and children', () => {
    renderWithTheme(
      <Base>
        <h1>Won Games</h1>
      </Base>
    )

    // menu
    expect(screen.getByTestId('Menu')).toBeInTheDocument()

    // footer
    expect(screen.getByTestId('Footer')).toBeInTheDocument()

    // children
    expect(
      screen.getByRole('heading', { name: /Won Games/i })
    ).toBeInTheDocument()
  })
})
