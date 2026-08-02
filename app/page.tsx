import Link from 'next/link';
import { Github, ExternalLink, Menu } from 'lucide-react';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#000000', color: '#ffffff' }}>
      {/* Nav */}
      <nav style={{ borderBottom: '1px solid #111827' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ fontWeight: 700, letterSpacing: '-0.02em', textDecoration: 'none', color: '#ffffff' }}>
            ContribTrust
          </Link>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <Link href="/#how-it-works" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px' }}>How It Works</Link>
            <Link href="/dashboard" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px' }}>Dashboard</Link>
            <a href="https://github.com/envystilllearning/contribtrust-protocol" target="_blank" rel="noopener noreferrer" style={{ color: '#9ca3af', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
              <Github style={{ width: '14px', height: '14px' }} />
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: '896px', margin: '0 auto', padding: '96px 24px 64px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
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
            MVP
          </span>
        </div>

        <h1 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '24px', lineHeight: 1.1, maxWidth: '768px' }}>
          <span style={{
            background: 'linear-gradient(135deg, #00d4ff 0%, #00ff88 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>ContribTrust</span>
        </h1>

        <p style={{ fontSize: '20px', color: '#d1d5db', marginBottom: '24px', lineHeight: 1.6, maxWidth: '768px' }}>
          Turn cross-platform contributions into verifiable on-chain credentials.
        </p>

        <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '48px', maxWidth: '640px', lineHeight: 1.6 }}>
          AI-assisted evaluation for GitHub, X, and Discord activity. Get a Contribution Passport that proves what you actually built — not just how active you look.
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
            Open Dashboard
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

      {/* How It Works */}
      <section id="how-it-works" style={{ maxWidth: '896px', margin: '0 auto', padding: '64px 24px' }}>
        <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '12px' }}>How It Works</h2>
        <p style={{ color: '#9ca3af', marginBottom: '32px', maxWidth: '640px', lineHeight: 1.6 }}>
          Instead of counting commits or followers, ContribTrust evaluates the actual substance of your contributions and stores the result as a portable credential.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <div style={{ padding: '20px', border: '1px solid #111827', borderRadius: '12px' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#6b7280', marginBottom: '8px' }}>01</div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Connect Accounts</h3>
            <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6 }}>
              Link GitHub, X, or Discord. We pull contribution signals automatically.
            </p>
          </div>
          <div style={{ padding: '20px', border: '1px solid #111827', borderRadius: '12px' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#6b7280', marginBottom: '8px' }}>02</div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>AI Analysis</h3>
            <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6 }}>
              Evaluation focuses on originality, technical depth, and community impact.
            </p>
          </div>
          <div style={{ padding: '20px', border: '1px solid #111827', borderRadius: '12px' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#6b7280', marginBottom: '8px' }}>03</div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Mint Passport</h3>
            <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6 }}>
              Generate a portable, verifiable on-chain credential you can use across Solana programs.
            </p>
          </div>
        </div>
      </section>

      {/* Use case / benefits */}
      <section style={{ maxWidth: '896px', margin: '0 auto', padding: '64px 24px' }}>
        <h2 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '12px' }}>Who Uses This</h2>
        <p style={{ color: '#9ca3af', marginBottom: '32px', maxWidth: '640px', lineHeight: 1.6 }}>
          This is useful if reputation needs to be checked quickly without relying on a single platform’s metrics.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          <div style={{ padding: '16px', border: '1px solid #111827', borderRadius: '12px' }}>
            <div style={{ fontWeight: 600, marginBottom: '6px' }}>Protocol teams</div>
            <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6 }}>Evaluate contributor quality across GitHub, X, and Discord faster.</p>
          </div>
          <div style={{ padding: '16px', border: '1px solid #111827', borderRadius: '12px' }}>
            <div style={{ fontWeight: 600, marginBottom: '6px' }}>Builder programs</div>
            <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6 }}>Identify candidates with verifiable contribution history instead of resume claims.</p>
          </div>
          <div style={{ padding: '16px', border: '1px solid #111827', borderRadius: '12px' }}>
            <div style={{ fontWeight: 600, marginBottom: '6px' }}>Hackathon organizers</div>
            <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6 }}>Verify post-event contributions and continue engagement with credible signal.</p>
          </div>
          <div style={{ padding: '16px', border: '1px solid #111827', borderRadius: '12px' }}>
            <div style={{ fontWeight: 600, marginBottom: '6px' }}>DAO contributors</div>
            <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6 }}>Carry a portable reputation credential across DAOs without rebuilding trust each time.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #111827', marginTop: '64px' }}>
        <div style={{ maxWidth: '896px', margin: '0 auto', padding: '24px', display: 'flex', justifyContent: 'space-between', color: '#6b7280', fontSize: '14px' }}>
          <span>ContribTrust</span>
          <span>Built for the Solana ecosystem.</span>
        </div>
      </footer>
    </main>
  );
}
