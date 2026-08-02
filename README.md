# ContribTrust

**Trust layer for AI-powered contributions in the Solana ecosystem.**

AI has made creating contributions cheap. We're building the trust layer that identifies which contributions actually matter.

---

## Thesis

AI tidak hanya mempercepat software development. AI juga mempercepat contribution creation.

Dalam beberapa tahun ke depan, setiap orang akan bisa menghasilkan:
- Pull Requests
- Documentation
- Research
- Design
- Content
- Governance proposals
- Community contributions

dalam hitungan menit menggunakan AI.

**Masalahnya bukan lagi kekurangan contributor. Masalahnya adalah menentukan kontribusi mana yang benar-benar bernilai.**

---

## Product Vision

Proof of Contribution Protocol (PoCP) adalah lapisan reputasi berbasis AI yang mengevaluasi kontribusi seseorang di berbagai platform dan menghasilkan **Contribution Passport** yang dapat diverifikasi.

AI menganalisis berbagai aktivitas:
- GitHub
- X (Twitter)
- Discord
- Notion
- Documentation
- Governance
- Research
- Design
- Product feedback

Alih-alih menghitung kuantitas, sistem mengevaluasi:
- **Originality**
- **Technical depth**
- **Community impact**
- **Adoption**
- **Consistency**
- **Collaboration**
- **Long-term value**

---

## Target Users

**Primary:**
- Solana Protocol Teams
- Grant Programs
- Hackathon Organizers
- Ambassador Programs
- DAO Contributors

**Secondary:**
- Individual builders
- Researchers
- Designers
- Content creators
- Developers

---

## Why Solana?

Contribution Passport disimpan sebagai credential yang dapat diverifikasi secara on-chain. Reputasi contributor tidak lagi dimiliki oleh satu platform — reputasi menjadi **portable**.

---

## MVP Features (2-3 Weeks)

- [ ] Wallet login (Phantom/Solflare)
- [ ] Import GitHub contributions
- [ ] Import X/Twitter activity
- [ ] AI Contribution Analysis
- [ ] Contribution Score
- [ ] Contribution Passport
- [ ] On-chain credential
- [ ] Public profile

---

## Tech Stack

- **Frontend:** Next.js 15 + Tailwind CSS
- **AI:** Hermes API (analysis engine)
- **Wallet:** Solana Wallet Adapter
- **On-chain:** SPL Token (NFT Passport)
- **Deploy:** Vercel

---

## Grant

Applying for **Agentic Engineering Grants by Superteam** — $200 USDG for building AI-powered tools on Solana.

---

## Status

🚧 **MVP in progress** — targeting 2-3 weeks for working prototype.

---

## License

MIT


## Getting Started

### 1. Clone and install

```bash
git clone https://github.com/envystilllearning/contribtrust.git
cd contribtrust
npm install
```

### 2. Setup environment

```bash
cp .env.example .env.local
# Edit .env.local and add your HERMES_API_KEY
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https://github.com/envystilllearning/contribtrust)

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Landing page
│   ├── dashboard/        # User dashboard
│   ├── passport/         # Contribution Passport display
│   ├── api/analyze/      # AI analysis endpoint
│   ├── layout.tsx
│   └── providers.tsx     # Solana wallet providers
├── components/
│   ├── WalletConnect.tsx
│   └── ImportButton.tsx
├── lib/
│   ├── hermes.ts         # Hermes AI client
│   └── solana.ts         # Solana utilities
└── data/
    └── prompts.ts        # AI analysis prompts
```

---

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `HERMES_API_KEY` | API key for Hermes AI analysis | Yes (for real AI analysis) |
| `SOLANA_NETWORK` | `devnet` or `mainnet-beta` | No (default: devnet) |
| `NEXT_PUBLIC_PORTFOLIO_URL` | Public URL of your deployment | No |

---

## License

MIT
