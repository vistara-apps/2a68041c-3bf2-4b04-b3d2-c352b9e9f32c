'use client';

import { BarChart3 } from 'lucide-react';

const protocols = [
  { name: 'Aave V3', apy: 18.2, color: 'bg-chart1' },
  { name: 'Compound V3', apy: 16.7, color: 'bg-chart2' },
  { name: 'Plasma', apy: 19.1, color: 'bg-chart3' },
];

export function APYComparison() {
  const maxAPY = Math.max(...protocols.map(p => p.apy));

  return (
    <div className="glass-card p-6">
      <div className="flex items-center gap-2 mb-6">
        <BarChart3 size={20} className="text-primary" />
        <h3 className="text-lg font-semibold">Protocol Comparison</h3>
      </div>
      
      <div className="space-y-4">
        {protocols.map((protocol) => (
          <div key={protocol.name}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">{protocol.name}</span>
              <span className="text-sm font-semibold text-primary">{protocol.apy}%</span>
            </div>
            
            <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
              <div 
                className={`h-full ${protocol.color} transition-all duration-300`}
                style={{ width: `${(protocol.apy / maxAPY) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full btn-ghost text-sm py-2 mt-6">
        View All Protocols
      </button>
    </div>
  );
}
