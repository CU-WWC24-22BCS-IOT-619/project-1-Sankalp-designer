import { Marker, Popup } from 'react-leaflet';
import { TreePine } from 'lucide-react';
import { ForestData } from '../../types';

interface ForestMarkerProps {
  forest: ForestData;
  onClick: (forest: ForestData) => void;
  isSelected?: boolean;
}

export function ForestMarker({ forest, onClick, isSelected }: ForestMarkerProps) {
  return (
    <Marker 
      position={[forest.coordinates.lat, forest.coordinates.lon]}
      eventHandlers={{
        click: () => onClick(forest)
      }}
    >
      <Popup>
        <div className="flex items-center gap-2 p-2">
          <TreePine className="w-4 h-4 text-green-600" />
          <span className={`font-medium ${isSelected ? 'text-green-600' : ''}`}>
            {forest.location}
          </span>
        </div>
        <div className="text-sm text-gray-600 mt-1">
          <p>Coverage: {forest.coverage}%</p>
          <p>Growth Rate: {forest.growthRate}%/year</p>
          <p>Water Retention: {forest.waterRetention}%</p>
        </div>
      </Popup>
    </Marker>
  );
}