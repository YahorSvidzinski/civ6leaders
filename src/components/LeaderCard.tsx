import React from 'react';
import { Leader } from '../data/leaders';
import { leaderImages } from '../data/leaderImages';
import { Crown, Target, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';

interface LeaderCardProps {
  leader: Leader;
  onClick: (leader: Leader) => void;
}

const getTierConfig = (tier: string) => {
  switch (tier) {
    case 'S': return {
      badge: 'bg-gradient-to-r from-red-500 to-red-600 text-white',
      card: 'bg-white border-red-200 hover:border-red-300',
      accent: 'text-red-600'
    };
    case 'A': return {
      badge: 'bg-gradient-to-r from-orange-500 to-orange-600 text-white',
      card: 'bg-white border-orange-200 hover:border-orange-300',
      accent: 'text-orange-600'
    };
    case 'B': return {
      badge: 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white',
      card: 'bg-white border-yellow-200 hover:border-yellow-300',
      accent: 'text-yellow-600'
    };
    case 'C': return {
      badge: 'bg-gradient-to-r from-green-500 to-green-600 text-white',
      card: 'bg-white border-green-200 hover:border-green-300',
      accent: 'text-green-600'
    };
    case 'D': return {
      badge: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white',
      card: 'bg-white border-blue-200 hover:border-blue-300',
      accent: 'text-blue-600'
    };
    case 'F': return {
      badge: 'bg-gradient-to-r from-purple-500 to-purple-600 text-white',
      card: 'bg-white border-purple-200 hover:border-purple-300',
      accent: 'text-purple-600'
    };
    default: return {
      badge: 'bg-gradient-to-r from-gray-500 to-gray-600 text-white',
      card: 'bg-white border-gray-200 hover:border-gray-300',
      accent: 'text-gray-600'
    };
  }
};

export const LeaderCard: React.FC<LeaderCardProps> = ({ leader, onClick }) => {
  const imageUrl = leaderImages[leader.id] || 'https://via.placeholder.com/80x80/6b7280/ffffff?text=?';
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
    <div 
      className={clsx(
        'rounded-2xl border-2 transition-all duration-200 cursor-pointer group',
        'hover:shadow-lg hover:-translate-y-1',
        tierConfig.card
      )}
      onClick={() => onClick(leader)}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={clsx(
            'px-3 py-1.5 rounded-full text-sm font-semibold',
            tierConfig.badge
          )}>
            {leader.tier}
          </div>
          <Crown className={clsx('w-5 h-5', tierConfig.accent)} />
        </div>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="relative flex-shrink-0">
            <img 
              src={imageUrl} 
              alt={leader.name}
              className="w-16 h-16 rounded-xl object-cover border-2 border-gray-100"
              onError={handleImageError}
            />
            <div 
              className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl border-2 border-gray-100 hidden items-center justify-center"
              style={{ display: 'none' }}
            >
              <span className="text-gray-600 font-bold text-lg">
                {leader.name.charAt(0)}
              </span>
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-lg text-gray-900 mb-1 truncate">
              {leader.name}
            </h3>
            <p className="text-gray-600 text-sm truncate">
              {leader.civilization}
            </p>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Unique Ability</span>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {leader.uniqueAbility}
          </p>
        </div>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {leader.strategies.victory.slice(0, 2).map((victory, index) => (
              <span 
                key={index} 
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {victory}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">
            View Strategy
          </span>
          <ChevronRight className={clsx(
            'w-5 h-5 transition-transform group-hover:translate-x-1',
            tierConfig.accent
          )} />
        </div>
      </div>
    </div>
  );
};