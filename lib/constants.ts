export const PROTOCOLS = {
  AAVE: 'aave',
  COMPOUND: 'compound',
  PLASMA: 'plasma',
} as const;

export const STRATEGY_TEMPLATES = {
  CONSERVATIVE: {
    id: 'conservative',
    name: 'Conservative 3x Loop',
    leverage: 3,
    minHealthFactor: 2.0,
    rebalanceThreshold: 1.8,
  },
  BALANCED: {
    id: 'balanced',
    name: 'Balanced 5x Loop',
    leverage: 5,
    minHealthFactor: 1.5,
    rebalanceThreshold: 1.4,
  },
  AGGRESSIVE: {
    id: 'aggressive',
    name: 'Aggressive 8x Loop',
    leverage: 8,
    minHealthFactor: 1.3,
    rebalanceThreshold: 1.25,
  },
} as const;

export const ALERT_THRESHOLDS = {
  HEALTH_WARNING: 1.3,
  LIQUIDATION_RISK: 1.2,
  CRITICAL: 1.15,
} as const;

export const FEES = {
  PERFORMANCE_FEE: 0.001, // 0.1%
  REFERRAL_FEE: 0.0005, // 0.05%
  GAS_SPONSORSHIP: 0.5, // $0.50 USDC
} as const;

export const BASE_CONTRACTS = {
  AAVE_POOL: '0xA238Dd80C259a72e81d7e4664a9801593F98d1c5',
  COMPOUND_USDC: '0xb125E6687d4313864e53df431d5425969c15Eb2F',
  MULTICALL3: '0xcA11bde05977b3631167028862bE2a173976CA11',
} as const;
