import { useRouter } from 'next/dist/client/router'
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet'

export type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
  polyline?: [number, number][]
}

const Map = ({ places, polyline = [] }: MapProps) => {
  const router = useRouter()

  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      scrollWheelZoom={true}
      style={{ width: '100%', height: '100%' }}
    >
      {polyline.length > 0 && (
        <Polyline
          color="var(--polyline)"
          weight={4}
          opacity={0.5}
          smoothFactor={1}
          positions={polyline}
        />
      )}
      <CustomTileLayer />
      {places?.map(({ id, slug, name, location }) => {
        const { latitude, longitude } = location
        return (
          <Marker
            key={`place-${id}`}
            title={name}
            position={[latitude, longitude]}
            eventHandlers={{
              click: () => {
                router.push(`/place/${slug}`)
              }
            }}
          />
        )
      })}
    </MapContainer>
  )
}

//Adiciona o NEXT_PUBIC_ no inicio do nome da variável para poder expor as variáveis do env, no front
const MAXPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAXPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
const MAXPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

const CustomTileLayer = () => {
  return MAXPBOX_API_KEY ? (
    <TileLayer
      attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="http://www.openstreetmap.org/about/">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/${MAXPBOX_USERID}/${MAXPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAXPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

export default Map
