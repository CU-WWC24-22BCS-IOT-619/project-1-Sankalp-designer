export interface ForestData {
  id: string;
  location: string;
  coverage: number;
  timestamp: string;
  growthRate: number;
  waterRetention: number;
  coordinates: {
    lat: number;
    lon: number;
  };
}

export interface SatelliteImage {
  url: string;
  date: string;
  resolution: string;
}

export interface EnvironmentalImpact {
  carbonOffset: number;
  biodiversityScore: number;
  waterRetention: number;
}