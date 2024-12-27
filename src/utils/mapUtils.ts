import L from 'leaflet';
import { ForestData } from '../types';

// Leaflet icon setup
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

export function setupLeafletIcons() {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
  });
}

function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export function findNearestForest(
  forests: ForestData[],
  lat: number,
  lng: number
): ForestData | null {
  if (!forests.length) return null;

  return forests.reduce((nearest, forest) => {
    const distanceToNearest = calculateDistance(
      lat,
      lng,
      nearest.coordinates.lat,
      nearest.coordinates.lon
    );
    const distanceToForest = calculateDistance(
      lat,
      lng,
      forest.coordinates.lat,
      forest.coordinates.lon
    );
    return distanceToForest < distanceToNearest ? forest : nearest;
  }, forests[0]);
}