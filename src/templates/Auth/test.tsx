import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    expect(screen.getAllByLabelText(/Won Games/i)).toHaveLength(2)

    expect(
      screen.getByRole('heading', { name: /all your favorite games/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /complete gaming platform/i })
    ).toBeInTheDocument()

    expect(screen.getByText('Auth Title')).toBeInTheDocument()

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
