import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Cart from '.'

import props from './mock'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Base">{children}</div>
  }
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Showcase" />
  }
}))

jest.mock('components/PaymentOptions', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="PaymentOptions" />
  }
}))

jest.mock('components/CartList', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="CartList" />
  }
}))

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Empty" />
  }
}))

describe('<Cart />', () => {
  it('should render sections', () => {
    renderWithTheme(<Cart {...props} />)

    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId('Base')).toBeInTheDocument()
    expect(screen.getByTestId('CartList')).toBeInTheDocument()
    expect(screen.getByTestId('PaymentOptions')).toBeInTheDocument()
    expect(screen.getByTestId('Showcase')).toBeInTheDocument()
    expect(screen.queryByTestId('Empty')).not.toBeInTheDocument()
  })

  it('should render empty section if there are no items', () => {
    renderWithTheme(<Cart {...props} items={[]} />)

    expect(screen.getByTestId('Empty')).toBeInTheDocument()
  })
})
