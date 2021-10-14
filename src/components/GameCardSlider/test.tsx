import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCardSlider from '.'
import theme from 'styles/theme'

import items from './mock'

describe('<GameCardSlider />', () => {
  it('should render arrows white', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: theme.colors.white
    })

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render 4 active cards', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(6)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })
})
