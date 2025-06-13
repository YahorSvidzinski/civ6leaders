import React from 'react';
import { Leader } from '../data/leaders';
import { leaderImages } from '../data/leaderImages';
import { 
  ArrowLeft, 
  Crown, 
  Target
} from 'lucide-react';
import { clsx } from 'clsx';

interface LeaderDetailProps {
  leader: Leader;
  onBack: () => void;
}

const getTierConfig = (tier: string) => {
  switch (tier) {
    case 'S': return {
      badge: 'bg-gradient-to-r from-red-500 to-red-600',
      header: 'bg-gradient-to-br from-red-50 to-red-100 border-red-200',
      accent: 'text-red-600',
      dot: 'bg-red-500'
    };
    case 'A': return {
      badge: 'bg-gradient-to-r from-orange-500 to-orange-600',
      header: 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200',
      accent: 'text-orange-600',
      dot: 'bg-orange-500'
    };
    case 'B': return {
      badge: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
      header: 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200',
      accent: 'text-yellow-600',
      dot: 'bg-yellow-500'
    };
    case 'C': return {
      badge: 'bg-gradient-to-r from-green-500 to-green-600',
      header: 'bg-gradient-to-br from-green-50 to-green-100 border-green-200',
      accent: 'text-green-600',
      dot: 'bg-green-500'
    };
    case 'D': return {
      badge: 'bg-gradient-to-r from-blue-500 to-blue-600',
      header: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200',
      accent: 'text-blue-600',
      dot: 'bg-blue-500'
    };
    case 'F': return {
      badge: 'bg-gradient-to-r from-purple-500 to-purple-600',
      header: 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200',
      accent: 'text-purple-600',
      dot: 'bg-purple-500'
    };
    default: return {
      badge: 'bg-gradient-to-r from-gray-500 to-gray-600',
      header: 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200',
      accent: 'text-gray-600',
      dot: 'bg-gray-500'
    };
  }
};

export const LeaderDetail: React.FC<LeaderDetailProps> = ({ leader, onBack }) => {
  const imageUrl = leaderImages[leader.id] || 'https://via.placeholder.com/120x120/6b7280/ffffff?text=?';
  const tierConfig = getTierConfig(leader.tier);
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    const fallback = target.nextElementSibling as HTMLElement;
    target.style.display = 'none';
    if (fallback) {
      fallback.style.display = 'flex';
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        <button 
          onClick={onBack}
          className="mb-8 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 px-6 py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md font-medium flex items-center gap-3"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Leaders
        </button>
        
        <div className={clsx(
          'rounded-2xl border-2 p-8 mb-8 shadow-lg',
          tierConfig.header
        )}>
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <img 
                  src={imageUrl} 
                  alt={leader.name}
                  className="w-24 h-24 rounded-2xl object-cover border-2 border-white shadow-lg"
                  onError={handleImageError}
                />
                <div 
                  className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl border-2 border-white shadow-lg hidden items-center justify-center"
                  style={{ display: 'none' }}
                >
                  <span className="text-gray-600 font-bold text-2xl">
                    {leader.name.charAt(0)}
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{leader.name}</h1>
                <p className="text-xl text-gray-700 font-medium">{leader.civilization}</p>
              </div>
            </div>
            <div className={clsx(
              'px-4 py-2 rounded-full text-white font-bold text-lg shadow-md flex items-center gap-2',
              tierConfig.badge
            )}>
              <Crown className="w-5 h-5" />
              {leader.tier}
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-white/50">
            <div className="flex items-center gap-3 mb-3">
              <Target className={clsx('w-6 h-6', tierConfig.accent)} />
              <h3 className="font-bold text-xl text-gray-900">{leader.uniqueAbility}</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">{leader.description}</p>
          </div>
        </div>

        {leader.bbgChanges && (
          <div className="bg-white rounded-2xl border-2 border-purple-200 p-8 mb-10 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl">🔄</span>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">BBG Mode Changes</h2>
                <p className="text-gray-600">Better Balanced Game modifications</p>
              </div>
            </div>
            <div className="space-y-4">
              {leader.bbgChanges.map((change, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <div className={clsx('w-2 h-2 rounded-full', tierConfig.dot)} />
                  <p className="text-gray-800 leading-relaxed">{change}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 mb-10 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl">🎯</span>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Strategic Direction</h2>
              <p className="text-gray-600">Core gameplay approach</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <p className="text-gray-800 text-lg leading-relaxed italic font-medium">
              "{leader.strategies.direction}"
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 mb-10 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl">✨</span>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Key Perks</h2>
              <p className="text-gray-600">Unique advantages and abilities</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leader.perks.map((perk, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                <div className={clsx('w-2 h-2 rounded-full', tierConfig.dot)} />
                <p className="text-gray-800 leading-relaxed">{perk}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl">⚡</span>
              <h2 className="text-3xl font-bold text-gray-900">Game Phase Strategies</h2>
            </div>
            <p className="text-gray-600 text-lg">Progression through early, mid, and late game</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border-2 border-amber-200 p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl">🌅</span>
                <div>
                  <h3 className="font-bold text-amber-800 text-xl">Early Game</h3>
                </div>
              </div>
              <div className="space-y-4">
                {leader.strategies.earlyGame.map((strategy, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                    <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-2" />
                    <p className="text-amber-800 leading-relaxed">{strategy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-orange-200 p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl">🏛️</span>
                <div>
                  <h3 className="font-bold text-orange-800 text-xl">Mid Game</h3>
                </div>
              </div>
              <div className="space-y-4">
                {leader.strategies.midGame.map((strategy, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0 mt-2" />
                    <p className="text-orange-800 leading-relaxed">{strategy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-red-200 p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl">🚀</span>
                <div>
                  <h3 className="font-bold text-red-800 text-xl">Late Game</h3>
                </div>
              </div>
              <div className="space-y-4">
                {leader.strategies.lateGame.map((strategy, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2" />
                    <p className="text-red-800 leading-relaxed">{strategy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl">📋</span>
              <h2 className="text-3xl font-bold text-gray-900">Quick Reference Guide</h2>
            </div>
            <p className="text-gray-600 text-lg">Essential information at a glance</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🏗️</span>
                <h3 className="font-bold text-slate-800 text-lg">Priority Districts</h3>
              </div>
              <div className="space-y-3">
                {leader.strategies.districts.map((district, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-100">
                    <div className="w-2 h-2 bg-slate-500 rounded-full flex-shrink-0" />
                    <span className="text-slate-800 font-medium">{district}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">👥</span>
                <h3 className="font-bold text-indigo-800 text-lg">Governors</h3>
              </div>
              <div className="space-y-3">
                {leader.strategies.governors.map((governor, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-indigo-100">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full flex-shrink-0" />
                    <span className="text-indigo-800 font-medium">{governor}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🏆</span>
                <h3 className="font-bold text-emerald-800 text-lg">Victory Types</h3>
              </div>
              <div className="space-y-3">
                {leader.strategies.victory.map((victory, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-emerald-100">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                    <span className="text-emerald-800 font-medium">{victory}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};