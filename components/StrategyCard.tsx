'use client';

import { HealthFactorGauge } from './HealthFactorGauge';
import { TrendingUp, AlertTriangle } from 'lucide-react';

interface Strategy {
  id: string;
  name: string;
  protocol: string;
  collateral: string;
  borrow: string;
  leverage: string;
  netAPY: number;
  healthFactor: number;
  totalSupplied: number;
  status: 'active' | 'warning' | 'paused';
}

interface StrategyCardProps {
  strategy: Strategy;
}

export function StrategyCard({ strategy }: StrategyCardProps) {
  const cardClass = strategy.status === 'warning' 
    ? 'strategy-card-warning' 
    : strategy.status === 'active'
    ? 'strategy-card-active'
    : 'strategy-card';

  return (
    <div className={cardClass}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-lg font-semibold mb-1">{strategy.name}</h4>
          <p className="text-sm text-text-muted">{strategy.protocol}</p>
        </div>
        
        {strategy.status === 'warning' && (
          <div className="flex items-center gap-1 text-warning text-sm">
            <AlertTriangle size={16} />
            <span>Low Health</span>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-xs text-text-muted mb-1">Net APY</p>
          <div className="flex items-center gap-1">
            <TrendingUp size={16} className="text-success" />
            <span className="text-lg font-semibold text-success">{strategy.netAPY}%</span>
          </div>
        </div>
        
        <div>
          <p className="text-xs text-text-muted mb-1">Leverage</p>
          <p className="text-lg font-semibold">{strategy.leverage}</p>
        </div>
        
        <div>
          <p className="text-xs text-text-muted mb-1">TVL</p>
          <p className="text-lg font-semibold">${strategy.totalSupplied.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-text-muted">Health Factor</p>
          <p className="text-sm font-medium">{strategy.healthFactor.toFixed(2)}x</p>
        </div>
        <HealthFactorGauge value={strategy.healthFactor} />
      </div>
      
      <div className="flex gap-2">
        <button className="flex-1 btn-ghost text-sm py-2">
          View Details
        </button>
        {strategy.status === 'warning' && (
          <button className="flex-1 btn-primary text-sm py-2">
            Rebalance
          </button>
        )}
      </div>
    </div>
  );
}
