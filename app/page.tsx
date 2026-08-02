import Link from 'next/link';
import { Providers } from './providers';
import { 
  Zap, 
  Shield, 
  Award, 
  Github, 
  Twitter, 
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Lock,
  Globe
} from 'lucide-react';

export default function Home() {
  return (
    <Providers>
      <main className="min-h-screen bg-black text-white overflow-hidden">
        {/* Gradient Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10">
          {/* Hero */}
          <section className="container mx-auto px-4 pt-32 pb-24">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">
                  Proof of Contribution Protocol
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="gradient-text">ContribTrust</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
                The trust layer for <span className="text-cyan-400 font-semibold">AI-powered contributions</span> in the Solana ecosystem.
              </p>
              
              <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
                AI has made creating contributions cheap. We build the infrastructure that identifies which contributions actually matter — and makes them verifiable on-chain.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/dashboard" 
                  className="group px-8 py-4 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-200 flex items-center gap-2"
                >
                  Launch Dashboard
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="https://github.com/envystilllearning/contribtrust" 
                  className="px-8 py-4 border border-gray-700 rounded-lg hover:border-gray-600 transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View Source
                </Link>
              </div>
            </div>
          </section>

          {/* Problem */}
          <section className="container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-red-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">The Problem</h2>
              </div>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  AI doesn't just accelerate software development — it accelerates <em>contribution creation</em>. 
                  In the coming years, everyone will be able to generate pull requests, documentation, research, 
                  design, and governance proposals in minutes using AI.
                </p>
                <p>
                  The result is exponential growth in contribution volume. The problem is no longer 
                  a shortage of contributors — it's determining which contributions actually matter.
                </p>
                <div className="glass rounded-xl p-6 border-l-4 border-red-500">
                  <p className="text-gray-400">
                    Today's ecosystem still measures contributions with simple metrics: PR count, thread count, Discord activity. 
                    These metrics are becoming irrelevant when AI can produce output at scale.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Solution */}
          <section className="container mx-auto px-4 py-24">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">The Solution</h2>
              </div>
              
              <p className="text-xl text-gray-300 mb-12 max-w-3xl">
                <span className="text-cyan-400 font-semibold">Proof of Contribution Protocol</span> — 
                an AI-powered reputation layer that evaluates contributions across platforms 
                and generates a verifiable Contribution Passport.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="group p-8 rounded-2xl glass hover:bg-white/5 transition-all duration-300 border border-gray-800/50">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">AI Analysis</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Understands context, originality, technical depth, and community impact — not just counts.
                  </p>
                </div>
                
                <div className="group p-8 rounded-2xl glass hover:bg-white/5 transition-all duration-300 border border-gray-800/50">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Lock className="w-7 h-7 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">On-Chain Credential</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Your reputation is portable across Solana protocols. No more rebuilding credibility from zero.
                  </p>
                </div>
                
                <div className="group p-8 rounded-2xl glass hover:bg-white/5 transition-all duration-300 border border-gray-800/50">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Award className="w-7 h-7 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Contribution Passport</h3>
                  <p className="text-gray-400 leading-relaxed">
                    A verifiable profile showing your real impact. Used by protocols, DAOs, grants, and hackathons.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="container mx-auto px-4 py-24">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">How It Works</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="relative">
                  <div className="absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent hidden md:block" />
                  <div className="relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center mx-auto mb-6">
                      <Github className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Connect Accounts</h3>
                    <p className="text-gray-400">
                      Link your GitHub, Twitter, Discord — we'll ingest your contributions.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent hidden md:block" />
                  <div className="relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center mx-auto mb-6">
                      <Zap className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">AI Analysis</h3>
                    <p className="text-gray-400">
                      Our AI evaluates originality, technical depth, community impact across 6 dimensions.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center mx-auto mb-6">
                      <Award className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Mint Passport</h3>
                    <p className="text-gray-400">
                      Generate your Contribution Passport NFT — a portable, verifiable on-chain credential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="container mx-auto px-4 py-24">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Built for the Solana Ecosystem</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass rounded-2xl p-8 border border-gray-800/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">6-Dimension Scoring</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Originality, Technical Depth, Community Impact, Consistency, Collaboration, Long-term Value.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="glass rounded-2xl p-8 border border-gray-800/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                      <Lock className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Anchor SBT Program</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Solana-native Soulbound Tokens. Non-transferable, verifiable credentials stored on-chain.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="glass rounded-2xl p-8 border border-gray-800/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Multi-Platform Ingest</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        GitHub, Twitter, Discord contributions aggregated into a unified reputation profile.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="glass rounded-2xl p-8 border border-gray-800/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Portable Reputation</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Use your Contribution Passport across Solana protocols, DAOs, grants, and hackathons.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="container mx-auto px-4 py-32">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to prove your contributions?
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
                Generate your Contribution Passport and make your impact verifiable.
              </p>
              <Link 
                href="/dashboard" 
                className="inline-flex items-center gap-2 px-10 py-5 bg-cyan-400 text-black font-semibold rounded-xl hover:bg-cyan-300 transition-all duration-200 text-lg glow"
              >
                Launch Dashboard
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-gray-800 py-12">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-gray-400 text-sm">
                  © 2025 ContribTrust. Open source under MIT License.
                </div>
                <div className="flex gap-6">
                  <Link href="https://github.com/envystilllearning/contribtrust" className="text-gray-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link href="https://twitter.com/fachrulfnd" className="text-gray-400 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </Providers>
  );
}
