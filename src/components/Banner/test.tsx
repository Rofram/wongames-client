import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

describe('<Banner />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Banner
        title="won games"
        subtitle="wongames game"
        buttonLabel="buy now"
        buttonLink="/game"
        img="https://unsplash.com/"
      />
    )

    // verificar se o elemento title está sendo renderizado
    expect(
      screen.getByRole('heading', { name: /won games/i })
    ).toBeInTheDocument()

    // verificar se o elemento subtitle está sendo renderizado
    expect(
      screen.getByRole('heading', { name: /wongames game/i })
    ).toBeInTheDocument()

    // verificar se o elemento Image está sendo renderizado
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()

    // gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
