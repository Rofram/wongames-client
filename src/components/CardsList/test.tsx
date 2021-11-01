import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardsList from '.'

import cardsMock from 'components/PaymentOptions/mock'

describe('<CardsList />', () => {
  it('should render the cards list', () => {
    renderWithTheme(<CardsList cards={cardsMock} />)

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: cardsMock[0].flag })
    ).toHaveAttribute('src', cardsMock[0].img)

    expect(screen.getByText(cardsMock[0].number)).toBeInTheDocument()
    expect(screen.getByText(cardsMock[1].number)).toBeInTheDocument()
  })
})
