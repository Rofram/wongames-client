import { screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import CartList from '.'

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

describe('<CardList />', () => {
  it('should render the card list', () => {
    const { container } = renderWithTheme(<CartList {...props} />)

    expect(screen.getAllByTestId('GameItem')).toHaveLength(props.items.length)

    expect(screen.getByText('Total')).toBeInTheDocument()

    expect(screen.getByText(props.total)).toHaveStyle({
      color: theme.colors.primary
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    renderWithTheme(<CartList {...props} hasButton />)

    expect(screen.getByLabelText(/buy it now/i)).toBeInTheDocument()
  })

  it('should render <Empty /> with no items in cart', () => {
    renderWithTheme(<CartList {...props} items={[]} />)

    expect(screen.getByTestId('Empty')).toBeInTheDocument()

    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
