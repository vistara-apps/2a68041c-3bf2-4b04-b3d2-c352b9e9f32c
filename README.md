# LoopDeFi - Auto-execute DeFi Looping Strategies

A Base MiniApp that automates DeFi looping strategies across Aave, Compound, and Plasma, enabling users to maximize yields while protecting against liquidations through AI-powered monitoring and one-click execution.

## Features

- **One-Click Strategy Templates**: Pre-audited looping strategies (Conservative 3x, Balanced 5x, Aggressive 8x)
- **Liquidation Protection Agent**: AI agent monitors health factors 24/7
- **Live APY Simulator**: Real-time calculator showing net APY across protocols
- **Gas-Optimized Batch Executor**: Bundles multiple transactions into one
- **Social Strategy Sharing**: Cast loops to Farcaster with embedded performance stats

## Tech Stack

- Next.js 15 with App Router
- React 19
- OnchainKit for Base integration
- Wagmi & Viem for blockchain interactions
- Tailwind CSS for styling
- TypeScript for type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.local.example` to `.env.local` and add your API keys:
```bash
cp .env.local.example .env.local
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── providers.tsx      # OnchainKit provider setup
│   └── globals.css        # Global styles with finance theme
├── components/            # React components
│   ├── AppShell.tsx       # Main app layout
│   ├── Dashboard.tsx      # Dashboard view
│   ├── StrategyCard.tsx   # Strategy display card
│   └── ...
├── lib/                   # Utilities and types
│   ├── types.ts           # TypeScript interfaces
│   ├── constants.ts       # App constants
│   └── utils.ts           # Helper functions
└── public/                # Static assets
```

## Design System

The app uses a professional finance theme with:
- Dark navy background (#0f1419)
- Gold accents (#ffd700)
- Clean, modern borders
- Glass morphism effects
- Smooth animations

## License

MIT
