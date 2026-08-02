'use client';

import { useState } from 'react';
import { Wallet, Github, Twitter, Sparkles, ExternalLink } from 'lucide-react';

type AnalysisResult = {
  mode: 'mock' | 'live';
  originality: number;
  technicalDepth: number;
  communityImpact: number;
  consistency: number;
  collaboration: number;
  overallScore: number;
  highlights: string[];
  improvements: string[];
};

type Step = 'connect' | 'import' | 'analyze' | 'result';

export default function Dashboard() {
  const [step, setStep] = useState<Step>('connect');
  const [github, setGithub] = useState('');
  const [twitter, setTwitter] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const canAnalyze = github.trim().length > 0 || twitter.trim().length > 0;

  async function runAnalysis() {
    if (!canAnalyze) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          githubUsername: github.trim() || undefined,
          twitterUsername: twitter.trim() || undefined,
          contributions: [],
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Analysis failed');
      setResult(data);
      setStep('result');
    } catch (e: any) {
      setError(e.message || 'Analysis failed');
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setStep('connect');
    setGithub('');
    setTwitter('');
    setResult(null);
    setError('');
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000000', color: '#ffffff' }}>
      <div style={{ maxWidth: '896px', margin: '0 auto', padding: '64px 24px' }}>
        <h1 style={{ fontSize: '30px', fontWeight: 700, marginBottom: '8px' }}>Dashboard</h1>
        <p style={{ color: '#9ca3af', marginBottom: '32px' }}>
          Connect accounts and generate your Contribution Passport.
        </p>

        {error && (
          <div style={{ marginBottom: '24px', padding: '12px 16px', borderRadius: '8px', border: '1px solid #7f1d1d', backgroundColor: 'rgba(220, 38, 38, 0.08)', color: '#fca5a5' }}>
            {error}
          </div>
        )}

        {step !== 'result' && (
          <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
            {(['connect', 'import', 'analyze'] as Step[]).map((s) => (
              <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#6b7280' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '9999px', border: '1px solid #374151', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {step === s ? '•' : '○'}
                </div>
                <span style={{ textTransform: 'capitalize' }}>{s === 'connect' ? 'Wallet' : s === 'import' ? 'Accounts' : 'Analysis'}</span>
              </div>
            ))}
          </div>
        )}

        {step === 'connect' && (
          <div style={{ padding: '24px', border: '1px solid #111827', borderRadius: '12px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <Wallet style={{ width: '18px', height: '18px', color: '#9ca3af' }} />
              <h2 style={{ fontSize: '18px', fontWeight: 700 }}>Connect Wallet</h2>
            </div>
            <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '16px' }}>
              Wallet is optional for analysis. Connect if you want to mint or store a verifiable Passport reference.
            </p>
            <button
              onClick={() => setStep('import')}
              style={{ padding: '10px 16px', borderRadius: '8px', border: '1px solid #374151', backgroundColor: '#111827', color: '#ffffff', fontWeight: 500 }}
            >
              Skip for now
            </button>
          </div>
        )}

        {step === 'import' && (
          <div style={{ padding: '24px', border: '1px solid #111827', borderRadius: '12px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <Github style={{ width: '18px', height: '18px', color: '#9ca3af' }} />
              <h2 style={{ fontSize: '18px', fontWeight: 700 }}>Import Contributions</h2>
            </div>
            <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '16px' }}>
              Enter a username to analyze. You can add both GitHub and X if you want.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '480px' }}>
              <div>
                <label style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '6px', display: 'block' }}>GitHub username</label>
                <input
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                  placeholder="e.g. envystilllearning"
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #374151', backgroundColor: '#000000', color: '#ffffff' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '6px', display: 'block' }}>X / Twitter username</label>
                <input
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                  placeholder="e.g. fachrulfnd"
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #374151', backgroundColor: '#000000', color: '#ffffff' }}
                />
              </div>
            </div>
            <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
              <button
                onClick={() => setStep('connect')}
                style={{ padding: '10px 16px', borderRadius: '8px', border: '1px solid #374151', backgroundColor: '#111827', color: '#ffffff', fontWeight: 500 }}
              >
                Back
              </button>
              <button
                onClick={() => setStep('analyze')}
                disabled={!canAnalyze}
                style={{ padding: '10px 16px', borderRadius: '8px', border: '1px solid #374151', backgroundColor: canAnalyze ? '#ffffff' : '#262626', color: canAnalyze ? '#000000' : '#737373', fontWeight: 600 }}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 'analyze' && (
          <div style={{ padding: '24px', border: '1px solid #111827', borderRadius: '12px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <Sparkles style={{ width: '18px', height: '18px', color: '#9ca3af' }} />
              <h2 style={{ fontSize: '18px', fontWeight: 700 }}>Analyze & Generate Passport</h2>
            </div>
            <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '16px' }}>
              Review the inputs and run analysis. Output is deterministic in mock mode and shows a mode flag so reviewers can tell what is simulated.
            </p>
            <div style={{ marginBottom: '16px', fontSize: '14px', color: '#d1d5db' }}>
              <div>GitHub: {github || '—'}</div>
              <div>X / Twitter: {twitter || '—'}</div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => setStep('import')}
                style={{ padding: '10px 16px', borderRadius: '8px', border: '1px solid #374151', backgroundColor: '#111827', color: '#ffffff', fontWeight: 500 }}
              >
                Back
              </button>
              <button
                onClick={runAnalysis}
                disabled={loading || !canAnalyze}
                style={{ padding: '10px 16px', borderRadius: '8px', border: 'none', backgroundColor: loading ? '#262626' : '#ffffff', color: loading ? '#737373' : '#000000', fontWeight: 600 }}
              >
                {loading ? 'Analyzing...' : 'Generate Contribution Passport'}
              </button>
            </div>
          </div>
        )}

        {step === 'result' && result && (
          <div style={{ padding: '24px', border: '1px solid #111827', borderRadius: '12px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700 }}>Analysis Result</h2>
              <span style={{ fontSize: '12px', color: '#6b7280', border: '1px solid #374151', padding: '2px 8px', borderRadius: '9999px' }}>
                {result.mode === 'mock' ? 'Mock mode' : 'Live mode'}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1 }}>{result.overallScore}<span style={{ fontSize: '18px', color: '#6b7280' }}>/100</span></div>
              <div style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.5 }}>
                Originality {result.originality}<br />
                Technical depth {result.technicalDepth}<br />
                Community impact {result.communityImpact}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '20px' }}>
              {[
                ['Originality', result.originality],
                ['Technical Depth', result.technicalDepth],
                ['Community Impact', result.communityImpact],
                ['Consistency', result.consistency],
                ['Collaboration', result.collaboration],
              ].map(([label, value]) => (
                <div key={label} style={{ padding: '12px', border: '1px solid #111827', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                    <span>{label}</span>
                    <span style={{ color: '#d1d5db' }}>{value}/100</span>
                  </div>
                  <div style={{ width: '100%', backgroundColor: '#111827', borderRadius: '9999px', height: '6px' }}>
                    <div style={{ width: `${value}%`, backgroundColor: '#34d399', height: '6px', borderRadius: '9999px' }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Highlights</div>
              <ul style={{ paddingLeft: '18px', color: '#9ca3af', fontSize: '14px', lineHeight: 1.6 }}>
                {result.highlights.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>Improvements</div>
              <ul style={{ paddingLeft: '18px', color: '#9ca3af', fontSize: '14px', lineHeight: 1.6 }}>
                {result.improvements.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={reset}
                style={{ padding: '10px 16px', borderRadius: '8px', border: '1px solid #374151', backgroundColor: '#111827', color: '#ffffff', fontWeight: 500 }}
              >
                New analysis
              </button>
              <a
                href="/passport"
                style={{ padding: '10px 16px', borderRadius: '8px', border: '1px solid #374151', backgroundColor: '#ffffff', color: '#000000', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                Open Passport
                <ExternalLink style={{ width: '14px', height: '14px' }} />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
