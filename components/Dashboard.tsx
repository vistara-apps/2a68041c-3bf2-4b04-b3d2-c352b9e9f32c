'use client';

import { StrategyGrid } from './StrategyGrid';
import { PortfolioOverview } from './PortfolioOverview';
import { APYComparison } from './APYComparison';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold mb-2">Dashboard</h2>
        <p className="text-text-muted">Monitor your active loops and explore new strategies</p>
      </div>
      
      <PortfolioOverview />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <StrategyGrid />
        </div>
        <div>
          <APYComparison />
        </div>
      </div>
    </div>
  );
}
