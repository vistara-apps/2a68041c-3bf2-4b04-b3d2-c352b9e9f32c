'use client';

import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name, Avatar } from '@coinbase/onchainkit/identity';
import { Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 border-b border-border bg-surface-glass backdrop-blur-xl flex items-center justify-between px-6">
      <div>
        <h1 className="text-xl font-semibold">LoopDeFi</h1>
        <p className="text-xs text-text-muted">Auto-execute DeFi strategies</p>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center hover:bg-surface-glass transition-all duration-200">
          <Bell size={18} />
        </button>
        
        <Wallet>
          <ConnectWallet className="btn-primary">
            <Avatar className="w-6 h-6" />
            <Name className="text-sm font-medium" />
          </ConnectWallet>
        </Wallet>
      </div>
    </header>
  );
}
