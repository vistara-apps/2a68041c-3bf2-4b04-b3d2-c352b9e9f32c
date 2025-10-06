'use client';

interface HealthFactorGaugeProps {
  value: number;
}

export function HealthFactorGauge({ value }: HealthFactorGaugeProps) {
  const getColor = () => {
    if (value >= 1.5) return 'text-success';
    if (value >= 1.3) return 'text-warning';
    return 'text-danger';
  };

  const getPercentage = () => {
    const max = 3;
    return Math.min((value / max) * 100, 100);
  };

  return (
    <div className="relative">
      <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
        <div 
          className={`h-full ${getColor()} bg-current transition-all duration-300`}
          style={{ width: `${getPercentage()}%` }}
        />
      </div>
    </div>
  );
}
