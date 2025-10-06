export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatPercentage(value: number): string {
  return `${value.toFixed(2)}%`;
}

export function formatAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function calculateNetAPY(
  supplyAPY: number,
  borrowAPY: number,
  leverage: number
): number {
  return supplyAPY * leverage - borrowAPY * (leverage - 1);
}

export function getHealthFactorStatus(
  healthFactor: number
): 'safe' | 'warning' | 'danger' {
  if (healthFactor >= 1.5) return 'safe';
  if (healthFactor >= 1.3) return 'warning';
  return 'danger';
}

export function calculateLiquidationPrice(
  collateralValue: number,
  borrowValue: number,
  liquidationThreshold: number
): number {
  return (borrowValue / liquidationThreshold) / collateralValue;
}
