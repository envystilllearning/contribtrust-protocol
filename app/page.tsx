import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-sm font-medium text-gray-400">Proof of Contribution Protocol</span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
            Live on Solana
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="gradient-text">ContribTrust</span>
        </h1>

        <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-3xl">
          The trust layer for AI-powered contributions in the Solana ecosystem.
        </p>

        <p className="text-base text-gray-500 mb-12 max-w-2xl leading-relaxed">
          We build the infrastructure that identifies which contributions actually matter — and makes them verifiable on-chain.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            Launch Dashboard
            <ExternalLink className="w-4 h-4" />
          </Link>

          <a
            href="https://github.com/envystilllearning/contribtrust"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-700 text-gray-300 font-medium rounded-lg hover:border-gray-500 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            View Source
          </a>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-sm font-semibold text-gray-500 mb-2">01</div>
            <h3 className="text-lg font-bold mb-2">Connect Accounts</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Link your GitHub, Twitter, or Discord. We ingest your contributions automatically.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-500 mb-2">02</div>
            <h3 className="text-lg font-bold mb-2">AI Analysis</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our AI evaluates originality, technical depth, and community impact.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-500 mb-2">03</div>
            <h3 className="text-lg font-bold mb-2">Mint Passport</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Generate your Contribution Passport — a portable, verifiable on-chain credential.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
