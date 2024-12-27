import { useState } from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { ForestData } from '../../types';
import ForestMarker from './ForestMarker';
import ForestDetails from './ForestDetails';
import { useForestData } from '../../hooks/useForestData';
import { findNearestForest } from '../../utils/mapUtils';

// Fix Leaflet default marker icon issue
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

function MapEvents({ onMapClick }: { onMapClick: (lat: number, lng: number) => void }) {
  useMapEvents({
    click: (e) => {
      onMapClick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

export default function Map() {
  const [selectedForest, setSelectedForest] = useState<ForestData | null>(null);
  const { forests, isLoading } = useForestData();

  const handleMapClick = (lat: number, lng: number) => {
    const nearest = findNearestForest(forests, lat, lng);
    setSelectedForest(nearest);
  };

  if (isLoading) {
    return <div className="h-[400px] flex items-center justify-center">Loading forest data...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="h-[400px] w-full rounded-lg overflow-hidden">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          className="h-full w-full"
          minZoom={2}
          maxBounds={[[-90, -180], [90, 180]]}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <MapEvents onMapClick={handleMapClick} />
          {forests?.map((forest) => (
            <ForestMarker
              key={forest.id}
              forest={forest}
              onClick={setSelectedForest}
            />
          ))}
        </MapContainer>
      </div>
      
      <ForestDetails forest={selectedForest} />
    </div>
  );
}