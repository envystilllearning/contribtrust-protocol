# ContribTrust

**Proof of Contribution Protocol — portable, verifiable contribution credentials for the Solana ecosystem.**

AI has made creating contributions cheap. This project builds the trust layer that identifies which contributions actually matter.

---

## Problem

Creation is faster than verification. Across GitHub, X, Discord, docs, and on-chain governance, more work is generated than can be honestly reviewed. Quantity no longer signals quality.

Protocols, DAOs, and builder programs need a better signal than commit counts or follower counts.

## Solution

ContribTrust evaluates contributions across platforms and produces a portable on-chain credential: the Contribution Passport.

The protocol scores work on:
- originality
- technical depth
- community impact
- adoption
- consistency
- collaboration

It does not rely on a single platform’s metrics. Reputation becomes portable.

## Why Solana

Portable credentials make sense on a chain designed for fast, cheap, composable transactions. Reputation should not be locked inside GitHub or X.

## MVP Features

- Wallet onboarding
- GitHub contribution import
- X/Twitter activity import
- AI contribution analysis
- Contribution scoring
- Contribution Passport
- On-chain credential
- Public profile

## Tech Stack

- **Frontend:** Next.js 15 + Tailwind CSS
- **Analysis:** AI evaluation engine
- **Wallet:** Solana Wallet Adapter
- **On-chain:** SPL token-based passport flow
- **Deploy:** Vercel

## Demo

Live deployment: https://contribtrust.vercel.app

## Project Structure

```
app/
├── page.tsx            # Landing page
├── layout.tsx          # Root layout + metadata
├── providers.tsx       # Solana wallet providers
├── dashboard/page.tsx  # Contribution dashboard
├── passport/page.tsx   # Passport display
└── api/analyze/route.ts # Analysis endpoint

components/
├── WalletConnect.tsx
└── ImportButton.tsx

lib/
├── hermes.ts           # Analysis client
└── solana.ts           # Solana utilities

data/
└── prompts.ts          # Analysis prompt templates
```

## Getting Started

### 1. Clone and install

```bash
git clone https://github.com/envystilllearning/contribtrust-protocol.git
cd contribtrust-protocol
npm install
```

### 2. Setup environment

```bash
cp .env.example .env.local
# Edit .env.local with required keys
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `HERMES_API_KEY` | API key for AI analysis | Yes |
| `SOLANA_NETWORK` | `devnet` or `mainnet-beta` | No |
| `NEXT_PUBLIC_PORTFOLIO_URL` | Public deployment URL | No |

## Status

MVP in progress. Current focus: contribution ingestion, scoring engine, and devnet passport flow.

## License

MIT
