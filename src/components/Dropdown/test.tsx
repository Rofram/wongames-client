import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import Dropdown from '.'

describe('<Dropdown />', () => {
  it('should render the component correctly', () => {
    const { container } = renderWithTheme(
      <Dropdown title={<span>Click here</span>}>
        <span>content</span>
      </Dropdown>
    )

    const content = screen.getByText(/content/i).parentElement

    expect(screen.getByText(/click here/i)).toBeInTheDocument()

    expect(content).toHaveStyle({
      opacity: 0
    })

    expect(content).toHaveAttribute('aria-hidden', 'true')

    userEvent.click(screen.getByText(/click here/i))

    expect(content).toHaveStyle({
      opacity: 1
    })

    expect(content).toHaveAttribute('aria-hidden', 'false')

    expect(container.firstChild).toMatchSnapshot()
  })
})
