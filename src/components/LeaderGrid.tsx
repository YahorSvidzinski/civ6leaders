import React, { useState, useMemo } from 'react';
import { Leader } from '../data/leaders';
import { LeaderCard } from './LeaderCard';

interface LeaderGridProps {
  leaders: Leader[];
  onLeaderSelect: (leader: Leader) => void;
}

export const LeaderGrid: React.FC<LeaderGridProps> = ({ leaders, onLeaderSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTier, setSelectedTier] = useState<string>('');
  const [selectedVictory, setSelectedVictory] = useState<string>('');

  const filteredLeaders = useMemo(() => {
    return leaders.filter(leader => {
      const matchesSearch = leader.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           leader.civilization.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTier = selectedTier === '' || leader.tier === selectedTier;
      const matchesVictory = selectedVictory === '' || 
                            leader.strategies.victory.some(v => v.toLowerCase().includes(selectedVictory.toLowerCase()));
      
      return matchesSearch && matchesTier && matchesVictory;
    });
  }, [leaders, searchTerm, selectedTier, selectedVictory]);

  const tierCounts = useMemo(() => {
    const counts = { S: 0, A: 0, B: 0, C: 0, D: 0, F: 0 };
    leaders.forEach(leader => {
      counts[leader.tier]++;
    });
    return counts;
  }, [leaders]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-8 shadow-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              🏛️ Civilization 6 Leader Cheatsheet
            </h1>
            <p className="text-blue-100 text-lg">BBG Mode Strategy Guide</p>
          </div>
        </div>

        {/* Tier Filter Buttons */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-10">
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setSelectedTier('')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                selectedTier === '' 
                  ? 'bg-gray-800 text-white shadow-lg transform scale-105' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
              }`}
            >
              ALL ({leaders.length})
            </button>
            <button
              onClick={() => setSelectedTier('S')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                selectedTier === 'S' 
                  ? 'bg-red-500 text-white shadow-lg transform scale-105' 
                  : 'bg-red-100 text-red-700 hover:bg-red-200 hover:shadow-md'
              }`}
            >
              S ({tierCounts.S})
            </button>
            <button
              onClick={() => setSelectedTier('A')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                selectedTier === 'A' 
                  ? 'bg-orange-500 text-white shadow-lg transform scale-105' 
                  : 'bg-orange-100 text-orange-700 hover:bg-orange-200 hover:shadow-md'
              }`}
            >
              A ({tierCounts.A})
            </button>
            <button
              onClick={() => setSelectedTier('B')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                selectedTier === 'B' 
                  ? 'bg-yellow-500 text-white shadow-lg transform scale-105' 
                  : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200 hover:shadow-md'
              }`}
            >
              B ({tierCounts.B})
            </button>
            <button
              onClick={() => setSelectedTier('C')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                selectedTier === 'C' 
                  ? 'bg-green-500 text-white shadow-lg transform scale-105' 
                  : 'bg-green-100 text-green-700 hover:bg-green-200 hover:shadow-md'
              }`}
            >
              C ({tierCounts.C})
            </button>
            <button
              onClick={() => setSelectedTier('D')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                selectedTier === 'D' 
                  ? 'bg-blue-500 text-white shadow-lg transform scale-105' 
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200 hover:shadow-md'
              }`}
            >
              D ({tierCounts.D})
            </button>
            <button
              onClick={() => setSelectedTier('F')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                selectedTier === 'F' 
                  ? 'bg-purple-500 text-white shadow-lg transform scale-105' 
                  : 'bg-purple-100 text-purple-700 hover:bg-purple-200 hover:shadow-md'
              }`}
            >
              F ({tierCounts.F})
            </button>
          </div>
          
          <div>
            <input
              type="text"
              placeholder="🔍 Search by leader name or civilization..."
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredLeaders.map(leader => (
            <div key={leader.id} className="transform transition-all duration-200 hover:scale-105">
              <LeaderCard
                leader={leader}
                onClick={onLeaderSelect}
              />
            </div>
          ))}
        </div>

        {filteredLeaders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No leaders found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedTier('');
                setSelectedVictory('');
              }}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Show All Leaders
            </button>
          </div>
        )}
      </div>
    </div>
  );
};