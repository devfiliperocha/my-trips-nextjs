import { CloseOutline } from '@styled-icons/evaicons-outline'
import Image from 'next/image'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'
import { useRouter } from 'next/dist/client/router'
import { NextSeo } from 'next-seo'

type ImageProps = {
  width: number
  height: number
  url: string
}

export type PlaceTemplateProps = {
  place: {
    slug: string
    name: string
    description: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

const PlacesTemplate = ({ place }: PlaceTemplateProps) => {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - Trips`}
        canonical="https://trips.phantom.dev.br"
        description={place.description?.text || ''}
        openGraph={{
          url: 'https://trips.phantom.dev.br',
          title: `${place.name} - Trips`,
          description: place.description?.text || '',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: place.name
            }
          ]
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html }}
          />
          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                width={image.width}
                height={image.height}
                key={`image-${index}`}
                src={image.url}
                alt={place.name}
                quality={75}
                objectFit="cover"
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

export default PlacesTemplate
