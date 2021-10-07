import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render footer with 4 columns topics', () => {
    const { container } = renderWithTheme(<Footer />)

    // cerifica se o footer possui a coluna contact
    const contact = screen.getByRole('heading', { name: /contact/i })
    expect(contact).toBeInTheDocument()

    // cerifica se o footer possui a coluna follow us
    const follow = screen.getByRole('heading', { name: /follow us/i })
    expect(follow).toBeInTheDocument()

    // cerifica se o footer possui a coluna links
    const links = screen.getByRole('heading', { name: /links/i })
    expect(links).toBeInTheDocument()

    // cerifica se o footer possui a coluna location
    const location = screen.getByRole('heading', { name: /location/i })
    expect(location).toBeInTheDocument()

    // gravar estado do footer
    expect(container.firstChild).toMatchSnapshot()
  })
})
