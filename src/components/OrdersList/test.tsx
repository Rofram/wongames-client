import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import OrdersList from '.'

import props from './mock'

jest.mock('components/GameItem', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="GameItem" />
    }
  }
})

jest.mock('components/Empty', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Empty" />
    }
  }
})

describe('<PaymentHistory />', () => {
  it('should render the heading', () => {
    renderWithTheme(<OrdersList {...props} />)

    expect(
      screen.getByRole('heading', { name: /my orders/i })
    ).toBeInTheDocument()

    expect(screen.getAllByTestId('GameItem')).toHaveLength(props.items!.length)
  })
})
