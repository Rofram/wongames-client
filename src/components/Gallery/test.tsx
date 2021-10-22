import 'match-media-mock'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Gallery from '.'

import mock from './mock'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={mock.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /Random image 1/i })
    ).toHaveAttribute('src', mock[0].src)

    expect(
      screen.getByRole('button', { name: /Random image 2/i })
    ).toHaveAttribute('src', mock[1].src)
  })

  it('should handle open modal', () => {
    renderWithTheme(<Gallery items={mock.slice(0, 2)} />)

    // selecionar o modal
    const modal = screen.getByLabelText('modal')

    // verificar se o modal está escondido
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    // clicar no botão de abrir o modal e verificar se ele abriu
    fireEvent.click(screen.getByRole('button', { name: /Random image 1/i }))
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should open modal with selected image', async () => {
    renderWithTheme(<Gallery items={mock.slice(0, 2)} />)

    // clicar no botão de abrir o modal e verificar se ele abriu
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Random image 2/i })
    )

    const img = await screen.findByRole('img', { name: /Random image 2/i })
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })

  it('should handle close modal when overlay or button is clicked', () => {
    renderWithTheme(<Gallery items={mock.slice(0, 2)} />)

    // selecionar o modal
    const modal = screen.getByLabelText('modal')

    // clicar no botão de abrir o modal e verificar se ele abriu
    fireEvent.click(screen.getByRole('button', { name: /Random image 1/i }))

    // clicar no botão de fechar e verificar se ele fechou
    fireEvent.click(screen.getByRole('button', { name: /close modal/i }))
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should handle close modal when user press esc', () => {
    const { container } = renderWithTheme(<Gallery items={mock.slice(0, 2)} />)

    // selecionar o modal
    const modal = screen.getByLabelText('modal')

    // clicar no botão de abrir o modal e verificar se ele abriu
    fireEvent.click(screen.getByRole('button', { name: /Random image 1/i }))

    // clicar no botão de fechar e verificar se ele fechou
    fireEvent.keyUp(container, { key: 'Escape' })

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })
})
