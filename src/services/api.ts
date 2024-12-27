const NASA_ENDPOINT = 'https://api.nasa.gov/planetary/earth/assets';

export async function fetchSatelliteData(lat: number, lon: number) {
  const response = await fetch(
    `${NASA_ENDPOINT}?lon=${lon}&lat=${lat}&date=2024-01-01&dim=0.15&api_key=DEMO_KEY`
  );
  return response.json();
}

export async function fetchForestData(): Promise<ForestData[]> {
  // Simulated data for major forests worldwide
  return [
    {
      id: '1',
      location: 'Amazon Rainforest',
      coverage: 85,
      timestamp: '2024-03-01',
      growthRate: 0.5,
      waterRetention: 92,
      coordinates: {
        lat: -3.4653,
        lon: -62.2159
      }
    },
    {
      id: '2',
      location: 'Congo Basin',
      coverage: 72,
      timestamp: '2024-03-01',
      growthRate: 0.3,
      waterRetention: 85,
      coordinates: {
        lat: -0.7893,
        lon: 23.6566
      }
    },
    {
      id: '3',
      location: 'Daintree Rainforest',
      coverage: 78,
      timestamp: '2024-03-01',
      growthRate: 0.4,
      waterRetention: 88,
      coordinates: {
        lat: -16.1700,
        lon: 145.4200
      }
    },
    {
      id: '4',
      location: 'Tongass National Forest',
      coverage: 95,
      timestamp: '2024-03-01',
      growthRate: 0.2,
      waterRetention: 90,
      coordinates: {
        lat: 57.5053,
        lon: -135.2353
      }
    },
    {
      id: '5',
      location: 'Sundarbans Mangrove',
      coverage: 68,
      timestamp: '2024-03-01',
      growthRate: 0.3,
      waterRetention: 95,
      coordinates: {
        lat: 21.9497,
        lon: 89.1833
      }
    },
    {
      id: '6',
      location: 'Białowieża Forest',
      coverage: 88,
      timestamp: '2024-03-01',
      growthRate: 0.2,
      waterRetention: 82,
      coordinates: {
        lat: 52.7333,
        lon: 23.8667
      }
    },
    {
      id: '7',
      location: 'Great Bear Rainforest',
      coverage: 91,
      timestamp: '2024-03-01',
      growthRate: 0.3,
      waterRetention: 89,
      coordinates: {
        lat: 52.5200,
        lon: -128.5800
      }
    },
    {
      id: '8',
      location: 'Valdivian Rainforest',
      coverage: 76,
      timestamp: '2024-03-01',
      growthRate: 0.4,
      waterRetention: 86,
      coordinates: {
        lat: -39.8333,
        lon: -73.2333
      }
    }
  ];
}