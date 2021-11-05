import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'

import Radio from '.'

describe('<Radio />', () => {
  it('should render with label white', () => {
    const { container } = renderWithTheme(
      <Radio label="Radio" id="check" value="anyValue" />
    )

    const label = screen.getByText('Radio')

    expect(label).toBeInTheDocument()

    expect(label).toHaveStyle({
      color: theme.colors.white
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with label black', () => {
    renderWithTheme(
      <Radio label="Radio" labelColor="black" id="check" value="anyValue" />
    )

    const label = screen.getByText('Radio')

    expect(label).toBeInTheDocument()

    expect(label).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should dispatch onCheck when status changes', () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Radio label="Radio" id="check" value="anyValue" onCheck={onCheck} />
    )

    const label = screen.getByText('Radio')

    expect(label).toBeInTheDocument()

    expect(onCheck).not.toHaveBeenCalled()

    fireEvent.click(label)

    expect(onCheck).toHaveBeenCalledWith('anyValue')
  })

  it('should be accessible with tab', () => {
    renderWithTheme(<Radio label="Radio" id="check" value="anyValue" />)

    const radio = screen.getByRole('radio')

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(radio).toHaveFocus()
  })
})
