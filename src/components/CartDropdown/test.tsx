import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CartDropdown from '.'

import props from './mock'

describe('<CartDropdown />', () => {
  it('should render <CartIcon /> and its badge', () => {
    renderWithTheme(<CartDropdown {...props} />)

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()

    expect(screen.getByText(`${props.items.length}`)).toBeInTheDocument()
  })

  it('should render Dropdown content with cart items and total', () => {
    renderWithTheme(<CartDropdown {...props} />)

    expect(screen.getByText(`${props.total}`)).toBeInTheDocument()

    expect(screen.getAllByText(`${props.items[0].title}`)).toHaveLength(
      props.items.length
    )

    expect(screen.getByLabelText(/buy it now/i)).toBeInTheDocument()
  })
})
