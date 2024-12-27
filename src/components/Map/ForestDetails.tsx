import { ForestData } from '../../types';
import { LeafIcon, DropletIcon, TreesIcon } from 'lucide-react';

interface ForestDetailsProps {
  forest: ForestData | null;
}

export default function ForestDetails({ forest }: ForestDetailsProps) {
  if (!forest) return null;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-3">{forest.location}</h3>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <TreesIcon className="w-4 h-4 text-green-600" />
          <span>Coverage: {forest.coverage}%</span>
        </div>
        <div className="flex items-center gap-2">
          <LeafIcon className="w-4 h-4 text-green-600" />
          <span>Growth Rate: {forest.growthRate}% per year</span>
        </div>
        <div className="flex items-center gap-2">
          <DropletIcon className="w-4 h-4 text-blue-600" />
          <span>Water Retention: {forest.waterRetention}%</span>
        </div>
      </div>
    </div>
  );
}