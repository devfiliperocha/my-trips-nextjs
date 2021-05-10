import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)
    //screen.logTestingPlaygroundURL() // Exibe uma URL com o component renderizado; Permite clica em partes do componente e exibe um trecho de código para realizar o teste se esta parte foi renderizada.
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    )
  })
  it('should render with the marker in correct place.', () => {
    const places = [
      {
        id: '1',
        name: 'Maceió',
        slug: 'maceio',
        location: {
          latitude: 0,
          longitude: 0
        }
      },
      {
        id: '2',
        name: 'Rio de Janeiro',
        slug: 'rio-de-janeiro',
        location: {
          latitude: 0,
          longitude: 0
        }
      }
    ]
    render(<Map places={[...places]} />)
    expect(screen.getByTitle(/maceió/i)).toBeInTheDocument()
    expect(screen.getByTitle(/rio de janeiro/i)).toBeInTheDocument()
  })
})
