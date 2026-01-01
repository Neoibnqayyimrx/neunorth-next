"use client";

import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import Image from "next/image";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const NIGERIA_COORDS: [number, number] = [9.082, 8.6753];

const LOCATIONS = [
  {
    name: "Mauritius",
    coords: [-20.3, 57.55] as [number, number],
    logo: "/assets/space.png",
    url: "https://space.consulting",
  },
  {
    name: "Germany",
    coords: [52.52, 13.405] as [number, number], // Berlin
    logo: "/assets/supBRT.svg",
    url: "#",
  },
  {
    name: "Estonia",
    coords: [58.6, 25.0] as [number, number],
    logo: "/assets/leap.avif",
    url: "#",
  },
  {
    name: "Germany",
    coords: [48.1351, 11.582] as [number, number], // Munich
    logo: "/assets/superlab.svg",
    url: "#",
  },
];
const createNigeriaIcon = () =>
  L.divIcon({
    html: '<div class="nigeria-marker"><svg width="14" height="14" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6" fill="#ff7a00" stroke="white" stroke-width="2" /></svg></div>',
    className: "nigeria-div-icon",
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });

const createLocationIcon = (logo: string, name: string) =>
  L.divIcon({
    html: `<div class="custom-marker"><img src="${logo}" alt="${name}" class="marker-logo" /></div>`,
    className: "custom-div-icon",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

// Component to handle scroll zoom behavior
function ScrollZoomHandler() {
  const map = useMapEvents({
    click: () => {
      map.scrollWheelZoom.enable();
    },
    mouseout: () => {
      map.scrollWheelZoom.disable();
    },
  });
  return null;
}

export default function NigeriaMap() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "/leaflet/images/marker-icon-2x.png",
        iconUrl: "/leaflet/images/marker-icon.png",
        shadowUrl: "/leaflet/images/marker-shadow.png",
      });
    }
  }, []);

  if (!isClient) {
    return (
      <div
        className="map-wrapper"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "500px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "24px", marginBottom: "8px" }}>🗺️</div>
          <p style={{ margin: 0, opacity: 0.7 }}>Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="map-wrapper">
      <MapContainer
        center={[20, 20]}
        zoom={2}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
        className="leaflet-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ScrollZoomHandler />

        {LOCATIONS.map((loc, i) => (
          <Polyline
            key={i}
            pathOptions={{
              color: "#005F56",
              weight: 2,
              opacity: 0.8,
              dashArray: "5, 5",
            }}
            positions={[NIGERIA_COORDS, loc.coords]}
          />
        ))}

        <Marker position={NIGERIA_COORDS} icon={createNigeriaIcon()}>
          <Popup>
            <div className="nigeria-popup">
              <strong>Nigeria Hub</strong>
              <span className="popup-subtitle">Neunorth</span>
            </div>
          </Popup>
        </Marker>

        {LOCATIONS.map((loc, i) => (
          <Marker
            key={i}
            position={loc.coords}
            icon={createLocationIcon(loc.logo, loc.name)}
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