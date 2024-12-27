import React from 'react';
import { Trees } from 'lucide-react';
import Map from './components/Map';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex items-center gap-2">
          <Trees className="w-6 h-6" />
          <h1 className="text-xl font-bold">Forest Growth Tracker</h1>
        </div>
      </nav>

      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Forest Coverage Map</h2>
              <Map />
            </div>
          </div>
          
          <div className="space-y-6">
            <Dashboard />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;