// src/lib/hermes.ts
// Hermes API client untuk analisis kontribusi

const HERMES_API_URL = process.env.HERMES_API_URL || 'https://api.hermes.example.com';
const HERMES_API_KEY = process.env.HERMES_API_KEY || '';

export interface ContributionAnalysis {
  originality: number;      // 0-100
  technicalDepth: number;   // 0-100
  communityImpact: number;  // 0-100
  consistency: number;      // 0-100
  collaboration: number;    // 0-100
  overallScore: number;     // 0-100
  highlights: string[];
  improvements: string[];
}

export async function analyzeContributions(params: {
  githubUsername?: string;
  twitterUsername?: string;
  contributions: Array<{
    platform: 'github' | 'twitter' | 'discord';
    type: string;
    content: string;
    metadata: Record<string, any>;
  }>;
}): Promise<ContributionAnalysis> {
  const response = await fetch(`${HERMES_API_URL}/v1/analyze/contributions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${HERMES_API_KEY}`,
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error(`Hermes API error: ${response.status}`);
  }

  return response.json();
}

export async function generatePassport(analysis: ContributionAnalysis, walletAddress: string) {
  // Placeholder: nanti integrasi dengan Solana untuk mint NFT Passport
  return {
    score: analysis.overallScore,
    walletAddress,
    timestamp: Date.now(),
    fingerprint: btoa(JSON.stringify(analysis)).slice(0, 64),
  };
}
