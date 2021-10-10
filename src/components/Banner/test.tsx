import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  title: 'won games',
  subtitle: 'wongames game',
  buttonLabel: 'buy now',
  buttonLink: '/game',
  img: 'https://unsplash.com/'
}

describe('<Banner />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

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

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)
    // verificar se o elemento Ribbon está sendo renderizado
    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      'font-size': '1.2rem'
    })
  })
})
