export interface User {
  fid: string;
  walletAddress: string;
  notificationPreferences: NotificationPreferences;
  totalLoopsExecuted: number;
  lifetimeVolume: number;
  referralCode: string;
}

export interface NotificationPreferences {
  healthWarnings: boolean;
  liquidationAlerts: boolean;
  rebalanceComplete: boolean;
  weeklyReports: boolean;
}

export interface Strategy {
  id: string;
  userId: string;
  templateId: 'conservative' | 'balanced' | 'aggressive';
  protocol: 'aave' | 'compound' | 'plasma';
  collateralAsset: string;
  borrowAsset: string;
  targetLeverage: number;
  currentHealthFactor: number;
  totalSupplied: number;
  totalBorrowed: number;
  netAPY: number;
  status: 'active' | 'paused' | 'unwound';
  createdAt: Date;
  lastRebalancedAt: Date;
}

export interface Transaction {
  id: string;
  strategyId: string;
  txHash: string;
  type: 'loop' | 'unwind' | 'rebalance';
  gasUsed: number;
  performanceFee: number;
  timestamp: Date;
  blockNumber: number;
}

export interface Alert {
  id: string;
  userId: string;
  strategyId: string;
  type: 'healthWarning' | 'liquidationRisk' | 'rebalanceComplete';
  severity: 'low' | 'medium' | 'high';
  message: string;
  actionUrl: string;
  sentAt: Date;
  acknowledged: boolean;
}

export interface ProtocolRate {
  protocol: string;
  asset: string;
  supplyAPY: number;
  borrowAPY: number;
  totalSupply: number;
  totalBorrow: number;
  utilizationRate: number;
  timestamp: Date;
}
