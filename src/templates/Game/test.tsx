import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import props from './mock'

import Game from '.'

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Menu" />
    }
  }
})

jest.mock('components/GameInfo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="GameInfo" />
    }
  }
})

jest.mock('components/Gallery', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Gallery" />
    }
  }
})

jest.mock('components/TextContent', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="TextContent" />
    }
  }
})

jest.mock('components/GameDetails', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="GameDetails" />
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

describe('<Game />', () => {
  it('should render all components', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByTestId('GameInfo')).toBeInTheDocument()
    expect(screen.getByTestId('Gallery')).toBeInTheDocument()
    expect(screen.getByTestId('TextContent')).toBeInTheDocument()
    expect(screen.getByTestId('GameDetails')).toBeInTheDocument()
    expect(screen.getAllByTestId('Showcase')).toHaveLength(2)
  })

  it('should not render the gallery if no images', () => {
    renderWithTheme(<Game {...props} gallery={undefined} />)

    expect(screen.queryByTestId('Gallery')).not.toBeInTheDocument()
  })

  it('should not render the gallery on mobile', () => {
    renderWithTheme(<Game {...props} />)

    expect(screen.getByTestId('Gallery').parentElement).toHaveStyle({
      display: 'none'
    })

    expect(screen.getByTestId('Gallery').parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)'
      }
    )
  })

  it('should render the cover image', () => {
    renderWithTheme(<Game {...props} />)

    const cover = screen.getByRole('img', { name: /cover/i })

    expect(cover).toHaveStyle({
      backgroundImage: `url(${props.cover})`,
      height: '39.5rem'
    })

    expect(cover).toHaveStyleRule('height', '70rem', {
      media: '(min-width: 768px)'
    })

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
