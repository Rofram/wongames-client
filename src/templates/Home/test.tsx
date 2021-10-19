import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import props from './mock'

import Home from '.'

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="BannerSlider" />
    }
  }
})

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Showcase" />
    }
  }
})

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    // banner slider
    expect(screen.getByTestId('BannerSlider')).toBeInTheDocument()

    // should render sections
    expect(screen.getAllByTestId('Showcase')).toHaveLength(5)
  })
})
