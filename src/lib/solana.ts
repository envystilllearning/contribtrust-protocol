// src/lib/solana.ts
// Solana wallet dan on-chain credential

import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { getOrCreateAssociatedTokenAccount, mintTo, createMint } from '@solana/spl-token';

const NETWORK = process.env.SOLANA_NETWORK || 'devnet';
const RPC_URL = NETWORK === 'mainnet'
  ? 'https://api.mainnet-beta.solana.com'
  : 'https://api.devnet.solana.com';

export const connection = new Connection(RPC_URL, 'confirmed');

export async function createPassportNFT(walletAddress: string, score: number): Promise<string> {
  // Placeholder: Mint NFT sebagai Contribution Passport
  // Implementasi nyata akan menggunakan SPL Token dengan metadata
  const tx = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: new PublicKey(walletAddress),
      toPubkey: new PublicKey(walletAddress),
      lamports: LAMPORTS_PER_SOL * 0.001, // Nominal transaction
    })
  );

  // Kirim transaction dan return signature
  const { blockhash } = await connection.getLatestBlockhash();
  tx.recentBlockhash = blockhash;
  tx.feePayer = new PublicKey(walletAddress);

  // Di sini akan di-sign oleh wallet adapter
  return tx.signatures[0]?.toString() || 'placeholder-signature';
}

export async function verifyPassportOnChain(fingerprint: string): Promise<boolean> {
  // Placeholder: Verifikasi fingerprint di on-chain
  return true;
}
