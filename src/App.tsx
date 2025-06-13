import React, { useState } from 'react';
import { LeaderGrid } from './components/LeaderGrid';
import { LeaderDetail } from './components/LeaderDetail';
import { leaders, Leader } from './data/leaders';
import './App.css';

function App() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  const handleLeaderSelect = (leader: Leader) => {
    setSelectedLeader(leader);
  };

  const handleBack = () => {
    setSelectedLeader(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {selectedLeader ? (
        <LeaderDetail leader={selectedLeader} onBack={handleBack} />
      ) : (
        <LeaderGrid leaders={leaders} onLeaderSelect={handleLeaderSelect} />
      )}
    </div>
  );
}

export default App;
