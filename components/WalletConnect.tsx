'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

export default function WalletConnect() {
  const { publicKey, connected } = useWallet();

  return (
    <div>
      <WalletMultiButton />
      {!connected && (
        <p className="mt-2 text-sm text-gray-400">Click to connect Phantom or Solflare wallet</p>
      )}
    </div>
  );
}
