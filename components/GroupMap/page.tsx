'use client'; // Required for Leaflet in Next.js 13+

import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Image from 'next/image';
import 'leaflet/dist/leaflet.css';
import './Map.css';

// Fix for default icons in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
  iconUrl: '/leaflet/images/marker-icon.png',
  shadowUrl: '/leaflet/images/marker-shadow.png',
});

// Coordinate data
const NIGERIA_COORDS: [number, number] = [9.082, 8.6753]; // [lat, lng] for Leaflet

const LOCATIONS = [
  { 
    name: "Mauritius", 
    coords: [-20.3, 57.55] as [number, number], 
    logo: "/assets/space.png", 
    url: "https://space.consulting" 
  },
  { 
    name: "Germany", 
    coords: [51.16, 10.45] as [number, number], 
    logo: "/assets/leap.avif", 
    url: "#" 
  },
  { 
    name: "Estonia", 
    coords: [58.6, 25.0] as [number, number], 
    logo: "/assets/leap.avif", 
    url: "#" 
  },
  { 
    name: "Australia", 
    coords: [-25.274, 133.775] as [number, number], 
    logo: "/assets/superlab.svg", 
    url: "#" 
  }
];

// Custom marker for Nigeria hub
const nigeriaIcon = L.divIcon({
  html: `
    <div class="nigeria-marker">
      <svg width="14" height="14" viewBox="0 0 14 14">
        <circle cx="7" cy="7" r="6" fill="#ff7a00" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  `,
  className: 'nigeria-div-icon',
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

// Custom markers for company locations (SMALLER SIZE - 32px total, 24px logo)
const createCustomIcon = (logoUrl: string) => {
  return L.divIcon({
    html: `
      <div class="custom-marker">
        <img src="${logoUrl}" alt="marker" class="marker-logo" />
      </div>
    `,
    className: 'custom-div-icon',
    iconSize: [32, 32],     // Overall marker size (reduced from 40px)
    iconAnchor: [16, 32],   // Anchor point (center bottom)
  });
};

export default function NigeriaMap() {
  // Create lines from Nigeria to each location
  const polylines = LOCATIONS.map(loc => ({
    positions: [NIGERIA_COORDS, loc.coords] as [[number, number], [number, number]],
    key: loc.name
  }));

  return (
    <div className="map-wrapper">
      <MapContainer
        center={[20, 20]} // Centered view
        zoom={2}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
        className="leaflet-map"
      >
        {/* Tile layer (OpenStreetMap - free, no token needed) */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Lines connecting Nigeria to locations */}
        {polylines.map(line => (
          <Polyline
            key={line.key}
            pathOptions={{ 
              color: '#ff7a00', 
              weight: 2, 
              opacity: 0.8,
              dashArray: '5, 5' // Optional: dashed lines
            }}
            positions={line.positions}
          />
        ))}

        {/* Nigeria Hub Marker */}
        <Marker position={NIGERIA_COORDS} icon={nigeriaIcon}>
          <Popup>
            <div className="nigeria-popup">
              <strong>Nigeria Hub</strong>
              <span className="popup-subtitle">Headquarters</span>
            </div>
          </Popup>
        </Marker>

        {/* Company Location Markers */}
        {LOCATIONS.map(loc => (
          <Marker
            key={loc.name}
            position={loc.coords}
            icon={createCustomIcon(loc.logo)}
          >
            <Popup>
              <div className="popup-content">
                <a 
                  href={loc.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="company-link"
                >
                  <div className="popup-logo">
                    <Image 
                      src={loc.logo} 
                      width={20} 
                      height={20} 
                      alt={`${loc.name} logo`}
                      className="popup-logo-img"
                    />
                  </div>
                  <div className="company-info">
                    <strong className="company-name">{loc.name}</strong>
                    <span className="company-link-text">Visit website →</span>
                  </div>
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}