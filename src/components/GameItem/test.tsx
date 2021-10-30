import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameItem from '.'

import props, { paymentInfoMock } from './mock'

describe('<GameItem />', () => {
  it('should render the item', () => {
    renderWithTheme(<GameItem {...props} />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByText(props.price)).toBeInTheDocument()
  })

  it('should render the item with download link', () => {
    const downloadLink = 'http://testLink.com'

    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the payment info', () => {
    renderWithTheme(<GameItem {...props} paymentInfo={paymentInfoMock} />)

    expect(
      screen.getByRole('img', { name: paymentInfoMock.flag })
    ).toHaveAttribute('src', paymentInfoMock.img)

    expect(screen.getByText(paymentInfoMock.number)).toBeInTheDocument()

    expect(screen.getByText(paymentInfoMock.purchaseDate)).toBeInTheDocument()
  })
})
