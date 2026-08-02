'use client';

import Link from 'next/link';
import { Providers } from './providers';

export default function Home() {
  return (
    <Providers>
      <main className="min-h-screen">
        {/* Hero */}
        <section className="container mx-auto px-4 py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-cyan-400">ContribTrust</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4">
            Trust layer for AI-powered contributions in the Solana ecosystem.
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl">
            AI has made creating contributions cheap. We're building the trust layer that identifies which contributions actually matter.
          </p>
          <div className="flex gap-4">
            <Link href="/dashboard" className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded">
              Launch App
            </Link>
            <Link href="https://github.com/envystilllearning/contribtrust" className="px-6 py-3 border border-gray-700 rounded">
              View Source
            </Link>
          </div>
        </section>

        {/* Thesis */}
        <section className="container mx-auto px-4 py-16 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-6">The Problem</h2>
          <p className="text-gray-300 mb-4 max-w-3xl">
            AI doesn't just accelerate software development — it accelerates contribution creation.
            In the coming years, everyone will be able to generate pull requests, documentation,
            research, design, and governance proposals in minutes using AI.
          </p>
          <p className="text-gray-300 mb-4 max-w-3xl">
            The result is exponential growth in contribution volume. The problem is no longer
            a shortage of contributors — it's determining which contributions actually matter.
          </p>
          <p className="text-gray-400 max-w-3xl">
            Today's ecosystem still measures contributions with simple metrics: PR count,
            thread count, Discord activity. These metrics are becoming irrelevant when AI
            can produce output at scale.
          </p>
        </section>

        {/* Solution */}
        <section className="container mx-auto px-4 py-16 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-6">The Solution</h2>
          <p className="text-gray-300 mb-6 max-w-3xl">
            <span className="text-cyan-400 font-semibold">Proof of Contribution Protocol</span> — an AI-powered reputation layer that evaluates contributions
            across platforms and generates a verifiable Contribution Passport.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
            <div className="p-6 border border-gray-800 rounded">
              <h3 className="font-bold mb-2">AI Analysis</h3>
              <p className="text-gray-400 text-sm">Understands context, originality, technical depth, and community impact — not just counts.</p>
            </div>
            <div className="p-6 border border-gray-800 rounded">
              <h3 className="font-bold mb-2">On-Chain Credential</h3>
              <p className="text-gray-400 text-sm">Your reputation is portable across Solana protocols. No more rebuilding credibility from zero.</p>
            </div>
            <div className="p-6 border border-gray-800 rounded">
              <h3 className="font-bold mb-2">Contribution Passport</h3>
              <p className="text-gray-400 text-sm">A verifiable profile showing your real impact. Used by protocols, DAOs, grants, and hackathons.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-20 border-t border-gray-800 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to prove your contributions?</h2>
          <Link href="/dashboard" className="px-8 py-4 bg-cyan-400 text-black font-semibold rounded text-lg">
            Launch Dashboard
          </Link>
        </section>
      </main>
    </Providers>
  );
}
