import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useMemo, useState } from 'react'

// Default Leaflet marker assets fix (since Vite bundling can break defaults)
const markerIcon = new L.Icon({
  iconUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
})

function CenterButton({ center }) {
  const map = useMap()
  return (
    <button
      onClick={() => map.setView(center, 15, { animate: true })}
      className="absolute z-[400] bottom-4 right-4 px-4 py-2 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-500"
    >
      Center Map
    </button>
  )
}

export default function Tracker() {
  // Dummy coordinates
  const [position] = useState({ lat: 28.6139, lng: 77.209 })
  const center = useMemo(() => [position.lat, position.lng], [position])

  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Live Location Tracker</h1>
        <p className="text-white/80 mb-6">Displaying current GPS position with recenter control.</p>

        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/30 backdrop-blur-xl">
          <MapContainer center={center} zoom={13} style={{ height: '60vh', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center} icon={markerIcon}>
              <Popup>Current location (simulated)</Popup>
            </Marker>
            <CenterButton center={center} />
          </MapContainer>
        </div>
      </div>
    </main>
  )
}
