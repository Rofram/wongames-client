import { fireEvent, screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

import props from './mock'

describe('<GameCard />', () => {
  it('should render correctly', () => {
    // renderiza o GameCard
    const { container } = renderWithTheme(<GameCard {...props} />)

    // verificar se o title está sendo renderizado
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    // verificar se o developer está sendo renderizado
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    // verificar se o image está sendo renderizado
    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument()

    // verificar se o price está sendo renderizado
    expect(screen.getByText(`$${props.price}.00`)).toBeInTheDocument()

    // verificar se o button está sendo renderizado
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    )

    // criar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render price in label by default', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice={undefined} />)

    // preço não tenha o line-through
    expect(screen.getByText(`$${props.price}.00`)).not.toHaveStyle({
      textDecoration: 'line-through'
    })
    // preço não tenha cor cinza
    expect(screen.getByText(`$${props.price}.00`)).not.toHaveStyle({
      color: theme.colors.gray
    })
    // preço tenha o background secundário
    expect(screen.getByText(`$${props.price}.00`)).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })

  it('should render promotional price', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice={100} />)

    const oldPrice = screen.getByText(`$${props.price}.00`)

    // preço tenha o line-through
    expect(oldPrice).toHaveStyleRule('text-decoration', 'line-through')
    // preço tenha cor cinza
    expect(oldPrice).toHaveStyle({
      color: theme.colors.gray
    })
  })

  it('should render ribbon', () => {
    renderWithTheme(<GameCard {...props} ribbon="20% OFF" />)

    const ribbon = screen.getByText(/20% OFF/i)

    expect(ribbon).toBeInTheDocument()
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toHaveBeenCalledTimes(1)
  })
})
