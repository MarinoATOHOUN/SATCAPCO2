import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "@/lib/leaflet-config";

// Mock data for emission points
const emissionPoints = [
  { id: 1, lat: 40.7128, lng: -74.0060, co2: 450, ch4: 1.9, co: 0.5, location: "New York, USA" },
  { id: 2, lat: 51.5074, lng: -0.1278, co2: 420, ch4: 1.8, co: 0.4, location: "London, UK" },
  { id: 3, lat: 35.6762, lng: 139.6503, co2: 480, ch4: 2.1, co: 0.6, location: "Tokyo, Japan" },
  { id: 4, lat: 48.8566, lng: 2.3522, co2: 410, ch4: 1.7, co: 0.4, location: "Paris, France" },
  { id: 5, lat: -33.8688, lng: 151.2093, co2: 390, ch4: 1.6, co: 0.3, location: "Sydney, Australia" },
  { id: 6, lat: 55.7558, lng: 37.6173, co2: 470, ch4: 2.0, co: 0.5, location: "Moscow, Russia" },
  { id: 7, lat: 28.6139, lng: 77.2090, co2: 520, ch4: 2.3, co: 0.7, location: "New Delhi, India" },
  { id: 8, lat: 39.9042, lng: 116.4074, co2: 510, ch4: 2.2, co: 0.6, location: "Beijing, China" },
  { id: 9, lat: -23.5505, lng: -46.6333, co2: 440, ch4: 1.9, co: 0.5, location: "São Paulo, Brazil" },
  { id: 10, lat: 1.3521, lng: 103.8198, co2: 400, ch4: 1.7, co: 0.4, location: "Singapore" },
  { id: 11, lat: 30.0444, lng: 31.2357, co2: 460, ch4: 2.0, co: 0.5, location: "Cairo, Egypt" },
  { id: 12, lat: 19.4326, lng: -99.1332, co2: 450, ch4: 1.9, co: 0.5, location: "Mexico City, Mexico" },
];

const getColorByType = (value: number, type: 'co2' | 'ch4' | 'co') => {
  if (type === 'co2') return value > 480 ? '#ef4444' : value > 440 ? '#f97316' : '#22c55e';
  if (type === 'ch4') return value > 2.0 ? '#ef4444' : value > 1.8 ? '#f97316' : '#22c55e';
  return value > 0.5 ? '#ef4444' : value > 0.4 ? '#f97316' : '#22c55e';
};

interface LeafletMapProps {
  onMapReady?: (map: any) => void;
  onClick?: (e: any) => void;
}

const MapInstanceHandler: React.FC<{ onMapReady?: (map: any) => void }> = ({ onMapReady }) => {
  const map = useMap();
  
  useEffect(() => {
    if (map && onMapReady) {
      onMapReady(map);
    }
  }, [map, onMapReady]);
  
  return null;
};

const MapClickHandler: React.FC<{ onClick?: (e: any) => void }> = ({ onClick }) => {
    useMapEvents({
        click(e) {
            if (onClick) {
                onClick(e);
            }
        },
    });
    return null;
}

export const LeafletMap: React.FC<LeafletMapProps> = ({ onMapReady, onClick }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: "100%", width: "100%" }}
      className="z-0"
    >
      <MapInstanceHandler onMapReady={onMapReady} />
      <MapClickHandler onClick={onClick} /> 
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {emissionPoints.map((point) => (
        <CircleMarker
          key={point.id}
          center={[point.lat, point.lng]}
          radius={point.co2 / 30}
          fillColor={getColorByType(point.co2, 'co2')}
          color="#fff"
          weight={2}
          opacity={0.8}
          fillOpacity={0.6}
        >
          <Popup>
            <div className="p-2">
              <h4 className="font-semibold text-sm mb-2">{point.location}</h4>
              <div className="space-y-1 text-xs">
                <p><strong>CO₂:</strong> {point.co2} ppm</p>
                <p><strong>CH₄:</strong> {point.ch4} ppb</p>
                <p><strong>CO:</strong> {point.co} ppb</p>
              </div>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};
