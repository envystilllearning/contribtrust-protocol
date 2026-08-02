import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#000000', color: '#ffffff' }}>
      <section style={{ maxWidth: '896px', margin: '0 auto', padding: '96px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <span style={{ fontSize: '14px', fontWeight: 500, color: '#9ca3af' }}>Proof of Contribution Protocol</span>
          <span style={{ 
            display: 'inline-block', 
            padding: '2px 8px', 
            borderRadius: '9999px', 
            backgroundColor: 'rgba(16, 185, 129, 0.1)', 
            border: '1px solid rgba(16, 185, 129, 0.3)', 
            color: '#34d399', 
            fontSize: '12px' 
          }}>
            Live on Solana
          </span>
        </div>

        <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '24px', lineHeight: 1.1 }}>
          <span style={{ 
            background: 'linear-gradient(135deg, #00d4ff 0%, #00ff88 100%)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>ContribTrust</span>
        </h1>

        <p style={{ fontSize: '20px', color: '#d1d5db', marginBottom: '24px', lineHeight: 1.6, maxWidth: '768px' }}>
          The trust layer for AI-powered contributions in the Solana ecosystem.
        </p>

        <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '48px', maxWidth: '512px', lineHeight: 1.6 }}>
          We build the infrastructure that identifies which contributions actually matter — and makes them verifiable on-chain.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <Link
            href="/dashboard"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '8px', 
              padding: '12px 24px', 
              backgroundColor: '#ffffff', 
              color: '#000000', 
              fontWeight: 600, 
              borderRadius: '8px',
              textDecoration: 'none'
            }}
          >
            Launch Dashboard
            <ExternalLink style={{ width: '16px', height: '16px' }} />
          </Link>

          <a
            href="https://github.com/envystilllearning/contribtrust-protocol"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '8px', 
              padding: '12px 24px', 
              border: '1px solid #374151', 
              color: '#d1d5db', 
              fontWeight: 500, 
              borderRadius: '8px',
              textDecoration: 'none'
            }}
          >
            <Github style={{ width: '16px', height: '16px' }} />
            View Source
          </a>
        </div>
      </section>

      <section style={{ maxWidth: '896px', margin: '0 auto', padding: '64px 24px' }}>
        <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '32px' }}>How It Works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#6b7280', marginBottom: '8px' }}>01</div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Connect Accounts</h3>
            <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6 }}>
              Link your GitHub, Twitter, or Discord. We ingest your contributions automatically.
            </p>
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#6b7280', marginBottom: '8px' }}>02</div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>AI Analysis</h3>
            <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6 }}>
              Our AI evaluates originality, technical depth, and community impact.
            </p>
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#6b7280', marginBottom: '8px' }}>03</div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Mint Passport</h3>
            <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6 }}>
              Generate your Contribution Passport — a portable, verifiable on-chain credential.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
