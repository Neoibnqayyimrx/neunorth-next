'use client';

import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import './Map.css';

// Coordinate data
const NIGERIA_COORDS: [number, number] = [9.082, 8.6753];

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

export default function NigeriaMap() {
  const [isClient, setIsClient] = useState(false);
  const [nigeriaIcon, setNigeriaIcon] = useState<L.DivIcon | null>(null);
  const [customIcons, setCustomIcons] = useState<Map<string, L.DivIcon>>(new Map());

  useEffect(() => {
    // Only run on client side
    setIsClient(true);

    // Fix for default icons in Leaflet
    if (typeof window !== 'undefined') {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
        iconUrl: '/leaflet/images/marker-icon.png',
        shadowUrl: '/leaflet/images/marker-shadow.png',
      });

      // Create Nigeria icon
      const nigeriaMarker = L.divIcon({
        html: `
          <div class="nigeria-marker">
            <svg width="14" height="14" viewBox="0 0 14 14">
              <circle cx="7" cy="7" r="6" fill="#ff7a00" stroke="white" stroke-width="2" />
            </svg>
          </div>
        `,
        className: 'nigeria-div-icon',
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      });
      setNigeriaIcon(nigeriaMarker);

      // Create custom icons for locations
      const icons = new Map<string, L.DivIcon>();
      LOCATIONS.forEach(loc => {
        const icon = L.divIcon({
          html: `
            <div class="custom-marker">
              <img src="${loc.logo}" alt="marker" class="marker-logo" />
            </div>
          `,
          className: 'custom-div-icon',
          iconSize: [32, 32],
          iconAnchor: [16, 32],
        });
        icons.set(loc.name, icon);
      });
      setCustomIcons(icons);
    }
  }, []);

  // Don't render anything on server
  if (!isClient) {
    return (
      <div 
        className="map-wrapper" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          minHeight: '500px'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>🗺️</div>
          <p style={{ margin: 0, opacity: 0.7 }}>Loading map...</p>
        </div>
      </div>
    );
  }

  // Create lines from Nigeria to each location
  const polylines = LOCATIONS.map(loc => ({
    positions: [NIGERIA_COORDS, loc.coords] as [[number, number], [number, number]],
    key: loc.name
  }));

  return (
    <div className="map-wrapper">
      <MapContainer
        center={[20, 20]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
        className="leaflet-map"
      >
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
              dashArray: '5, 5'
            }}
            positions={line.positions}
          />
        ))}

        {/* Nigeria Hub Marker */}
        {nigeriaIcon && (
          <Marker position={NIGERIA_COORDS} icon={nigeriaIcon}>
            <Popup>
              <div className="nigeria-popup">
                <strong>Nigeria Hub</strong>
                <span className="popup-subtitle">Headquarters</span>
              </div>
            </Popup>
          </Marker>
        )}

        {/* Company Location Markers */}
        {LOCATIONS.map(loc => {
          const icon = customIcons.get(loc.name);
          return icon ? (
            <Marker
              key={loc.name}
              position={loc.coords}
              icon={icon}
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
          ) : null;
        })}
      </MapContainer>
    </div>
  );
}