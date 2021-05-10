import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('<Link/>', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/link">LinkWrapperChildren</LinkWrapper>)
    const children = screen.getByRole('link', {
      name: /linkwrapperchildren/i
    })
    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/link')
  })
})
