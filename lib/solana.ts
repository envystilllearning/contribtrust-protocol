// src/lib/solana.ts
// Solana wallet dan on-chain credential

import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL, clusterApiUrl } from '@solana/web3.js';

const NETWORK = process.env.SOLANA_NETWORK || 'devnet';
const RPC_URL = NETWORK === 'mainnet-beta'
  ? 'https://api.mainnet-beta.solana.com'
  : clusterApiUrl('devnet');

export const connection = new Connection(RPC_URL, 'confirmed');

export async function createPassportNFT(walletAddress: string, score: number): Promise<string> {
  // Placeholder: Mint NFT sebagai Contribution Passport
  // Implementasi nyata akan menggunakan SPL Token dengan metadata
  console.log(`Creating passport for ${walletAddress} with score ${score}`);
  
  // Return mock signature untuk MVP
  return `mock-signature-${Date.now()}`;
}

export async function verifyPassportOnChain(fingerprint: string): Promise<boolean> {
  // Placeholder: Verifikasi fingerprint di on-chain
  console.log(`Verifying fingerprint: ${fingerprint}`);
  return true;
}
