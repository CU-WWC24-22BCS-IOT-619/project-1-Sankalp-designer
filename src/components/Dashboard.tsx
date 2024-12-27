import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Leaf, TreePine, Droplets } from 'lucide-react';

const data = [
  { month: 'Jan', coverage: 65 },
  { month: 'Feb', coverage: 68 },
  { month: 'Mar', coverage: 72 },
  { month: 'Apr', coverage: 75 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <Leaf className="text-green-600" />
            <h3 className="font-semibold">Carbon Offset</h3>
          </div>
          <p className="text-2xl font-bold mt-2">2,450 tons</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <TreePine className="text-blue-600" />
            <h3 className="font-semibold">Trees Planted</h3>
          </div>
          <p className="text-2xl font-bold mt-2">12,345</p>
        </div>
        <div className="bg-cyan-50 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <Droplets className="text-cyan-600" />
            <h3 className="font-semibold">Water Retention</h3>
          </div>
          <p className="text-2xl font-bold mt-2">+15%</p>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold mb-4">Forest Coverage Trend</h3>
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="coverage" stroke="#059669" />
        </LineChart>
      </div>
    </div>
  );
}