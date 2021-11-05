import { fireEvent, screen } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" name="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()

    expect(screen.getByLabelText('checkbox label')).toBeInTheDocument()
    expect(screen.getByText('checkbox label')).toHaveAttribute('for', 'check')
  })

  it('should render without label', () => {
    const { container } = renderWithTheme(<Checkbox />)

    expect(container.querySelector('label')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" name="check" labelColor="black" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should dispatch onCheck when status change', () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Checkbox label="Checkbox" name="check" onCheck={onCheck} />
    )

    expect(onCheck).not.toHaveBeenCalled()

    const checkbox = screen.getByRole('checkbox')

    fireEvent.click(checkbox)

    expect(onCheck).toHaveBeenCalledTimes(1)

    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck when status change', () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Checkbox label="Checkbox" name="check" onCheck={onCheck} isChecked />
    )

    const checkbox = screen.getByRole('checkbox')

    fireEvent.click(checkbox)

    expect(onCheck).toHaveBeenCalledTimes(1)

    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be accessible with tab', () => {
    renderWithTheme(<Checkbox label="Checkbox" name="check" />)

    expect(document.body).toHaveFocus()

    const checkbox = screen.getByRole('checkbox')

    userEvent.tab()

    expect(checkbox).toHaveFocus()
  })
})
