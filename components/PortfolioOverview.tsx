'use client';

import { TrendingUp, DollarSign, Activity, Shield } from 'lucide-react';

const metrics = [
  {
    label: 'Total Value Locked',
    value: '$24,567.89',
    change: '+12.5%',
    icon: DollarSign,
    positive: true,
  },
  {
    label: 'Net APY',
    value: '21.3%',
    change: '+2.1%',
    icon: TrendingUp,
    positive: true,
  },
  {
    label: 'Active Loops',
    value: '3',
    change: '+1',
    icon: Activity,
    positive: true,
  },
  {
    label: 'Avg Health Factor',
    value: '1.85x',
    change: 'Safe',
    icon: Shield,
    positive: true,
  },
];

export function PortfolioOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        
        return (
          <div key={metric.label} className="metric-card">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon size={20} className="text-primary" />
              </div>
              <span className={`text-xs font-medium ${metric.positive ? 'text-success' : 'text-danger'}`}>
                {metric.change}
              </span>
            </div>
            
            <div>
              <p className="text-2xl font-semibold mb-1">{metric.value}</p>
              <p className="text-sm text-text-muted">{metric.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
