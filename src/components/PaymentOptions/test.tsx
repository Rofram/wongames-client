import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import PaymentOptions from '.'

import cards from './mock'

describe('<PaymentOptions />', () => {
  it('should render the heading', () => {
    renderWithTheme(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

    expect(screen.getByLabelText(cards[0].number)).toBeInTheDocument()
    expect(screen.getByLabelText(cards[1].number)).toBeInTheDocument()

    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
  })

  it('should handle select card when clicking on the label', async () => {
    renderWithTheme(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

    userEvent.click(screen.getByLabelText(cards[0].number))

    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /1234/ })).toBeChecked()
    })
  })

  it('should not call handlePayment when button is disabled', async () => {
    const handlePayment = jest.fn()
    renderWithTheme(
      <PaymentOptions cards={cards} handlePayment={handlePayment} />
    )

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should call handlePayment when credit card is selected', async () => {
    const handlePayment = jest.fn()
    renderWithTheme(
      <PaymentOptions cards={cards} handlePayment={handlePayment} />
    )

    userEvent.click(screen.getByLabelText(cards[0].number))

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    expect(handlePayment).toHaveBeenCalled()
  })
})
