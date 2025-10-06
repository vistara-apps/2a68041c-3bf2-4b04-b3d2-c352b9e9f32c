'use client';

import { StrategyCard } from './StrategyCard';

const strategies = [
  {
    id: '1',
    name: 'Conservative 3x ETH Loop',
    protocol: 'Aave V3',
    collateral: 'WETH',
    borrow: 'USDC',
    leverage: '3x',
    netAPY: 18.2,
    healthFactor: 2.1,
    totalSupplied: 5000,
    status: 'active' as const,
  },
  {
    id: '2',
    name: 'Balanced 5x ETH Loop',
    protocol: 'Compound V3',
    collateral: 'WETH',
    borrow: 'USDC',
    leverage: '5x',
    netAPY: 21.3,
    healthFactor: 1.65,
    totalSupplied: 10000,
    status: 'active' as const,
  },
  {
    id: '3',
    name: 'Aggressive 8x ETH Loop',
    protocol: 'Plasma',
    collateral: 'WETH',
    borrow: 'USDC',
    leverage: '8x',
    netAPY: 34.7,
    healthFactor: 1.28,
    totalSupplied: 8000,
    status: 'warning' as const,
  },
];

export function StrategyGrid() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Active Strategies</h3>
        <button className="btn-primary text-sm py-2">
          + New Loop
        </button>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {strategies.map((strategy) => (
          <StrategyCard key={strategy.id} strategy={strategy} />
        ))}
      </div>
    </div>
  );
}
