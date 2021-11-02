import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Profile from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/profile/me' }))
}))

jest.mock('components/ProfileMenu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="ProfileMenu" />
    }
  }
})

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Base">{children}</div>
  }
}))

describe('<Profile />', () => {
  it('should render sections', () => {
    renderWithTheme(<Profile>Children</Profile>)

    expect(
      screen.getByRole('heading', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/children/i)).toBeInTheDocument()

    expect(screen.getByTestId('ProfileMenu')).toBeInTheDocument()

    expect(screen.getByTestId('Base')).toBeInTheDocument()
  })
})
