import { useState } from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useForestData } from '../hooks/useForestData';
import { ForestMarker } from './Map/ForestMarker';
import ForestDetails from './Map/ForestDetails';
import { setupLeafletIcons, findNearestForest } from '../utils/mapUtils';

// Initialize Leaflet icons
setupLeafletIcons();

function MapEvents({ onMapClick }: { onMapClick: (lat: number, lng: number) => void }) {
  useMapEvents({
    click: (e) => {
      onMapClick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

export default function Map() {
  const [selectedForest, setSelectedForest] = useState(null);
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
          {forests.map((forest) => (
            <ForestMarker
              key={forest.id}
              forest={forest}
              onClick={setSelectedForest}
              isSelected={selectedForest?.id === forest.id}
            />
          ))}
        </MapContainer>
      </div>
      
      <ForestDetails forest={selectedForest} />
    </div>
  );
}