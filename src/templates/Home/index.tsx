import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'
import { InfoOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

// Dynamic component para impedir o mapa de ser renderizado pelo lado do servidor, pois o mapa precisa do atributo window.
// Tbm serviria para criar um Loading, enquanto o componente não é carregado.
const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Trips"
        canonical="https://trips.phantom.dev.br"
        description=" A simple project to show my trips "
        openGraph={{
          url: 'https://trips.phantom.dev.br',
          title: 'Trips',
          description: ' A simple project to show my trips ',
          images: [
            {
              url: 'https://trips.phantom.dev.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Trips'
            }
          ],
          site_name: 'Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
