import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Showcase from '.'

import props from './mock'

describe('<Showcase />', () => {
  it('should render full showcase', () => {
    const { container } = renderWithTheme(<Showcase {...props} />)

    screen.getByRole('heading', { name: /most popular/i })

    screen.getByRole('heading', { name: props.highlight.title })

    expect(container.querySelector('.slick-slide')).toBeInTheDocument()
  })

  it('should render showcase without title', () => {
    const { highlight, games } = props
    const { container } = renderWithTheme(
      <Showcase highlight={highlight} games={games} />
    )

    expect(
      screen.queryByRole('heading', { name: /most popular/i })
    ).not.toBeInTheDocument()

    screen.getByRole('heading', { name: props.highlight.title })

    expect(container.querySelector('.slick-slide')).toBeInTheDocument()
  })

  it('should render showcase without highlight', () => {
    const { title, games } = props
    const { container } = renderWithTheme(
      <Showcase title={title} games={games} />
    )

    screen.getByRole('heading', { name: /most popular/i })

    expect(
      screen.queryByRole('heading', { name: props.highlight.title })
    ).not.toBeInTheDocument()

    expect(container.querySelector('.slick-slide')).toBeInTheDocument()
  })

  it('should render showcase without games', () => {
    const { title, highlight } = props
    const { container } = renderWithTheme(
      <Showcase title={title} highlight={highlight} />
    )

    screen.getByRole('heading', { name: /most popular/i })

    screen.getByRole('heading', { name: props.highlight.title })

    expect(container.querySelector('.slick-slide')).not.toBeInTheDocument()
  })
})
