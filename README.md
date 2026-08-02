# ContribTrust

**Trust layer for AI-powered contributions in the Solana ecosystem.**

AI has made creating contributions cheap. This project builds the trust layer that identifies which contributions actually matter.

---

## Problem

Creation is faster than verification. Across GitHub, X, Discord, docs, and on-chain governance, more work is generated than can be honestly reviewed. Quantity no longer signals quality.

## Solution

Proof of Contribution Protocol evaluates contributions across platforms and produces a portable on-chain credential: the Contribution Passport. The protocol scores work on originality, technical depth, impact, adoption, consistency, and collaboration — not volume.

## Target Users

**Primary:**
- Protocol teams
- Builder programs
- Hackathon organizers
- Community operators
- DAO contributors

**Secondary:**
- Individual builders
- Researchers
- Designers
- Content creators
- Developers

## Why Solana

Portable credentials. Reputation should not be locked inside a single platform. On-chain verification lets contributors carry trust with them.

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
- **Analysis:** AI evaluation engine via Hermes-compatible API
- **Wallet:** Solana Wallet Adapter
- **On-chain:** SPL token-based passport flow
- **Deploy:** Vercel

## Status

🚧 **MVP in progress** — targeting a working prototype within 2–3 weeks.

## License

MIT

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

MIT
