'use client';

import { Home, TrendingUp, Users, Settings2, BarChart3, Shield } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: TrendingUp, label: 'Active Loops', href: '/loops' },
  { icon: BarChart3, label: 'Analytics', href: '/analytics' },
  { icon: Users, label: 'Social', href: '/social' },
  { icon: Shield, label: 'Protection', href: '/protection' },
  { icon: Settings2, label: 'Settings', href: '/settings' },
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState('/');

  return (
    <aside className="w-20 bg-surface border-r border-border flex flex-col items-center py-6 space-y-8">
      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
        <span className="text-bg font-bold text-xl">L</span>
      </div>
      
      <nav className="flex-1 flex flex-col space-y-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.href;
          
          return (
            <button
              key={item.href}
              onClick={() => setActiveItem(item.href)}
              className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 ${
                isActive 
                  ? 'bg-primary text-bg shadow-glow' 
                  : 'text-text-muted hover:text-fg hover:bg-surface-glass'
              }`}
              title={item.label}
            >
              <Icon size={20} />
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
