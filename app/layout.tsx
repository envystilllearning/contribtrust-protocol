import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ContribTrust — Trust Layer for AI Contributions',
  description: 'Proof of Contribution Protocol for Solana ecosystem. AI-powered reputation system.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className + " bg-black text-white"}>{children}</body>
    </html>
  );
}
