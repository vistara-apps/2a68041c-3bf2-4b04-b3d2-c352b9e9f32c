import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LoopDeFi - Auto-execute DeFi Looping Strategies',
  description: 'Auto-execute DeFi looping strategies with one click—no liquidation fear, max yield.',
  openGraph: {
    title: 'LoopDeFi',
    description: 'Auto-execute DeFi looping strategies with one click',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
