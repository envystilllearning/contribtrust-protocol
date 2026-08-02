'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
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
  Globe,
  Menu,
  X,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyAddress = () => {
    navigator.clipboard.writeText('https://contribtrust.vercel.app');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 grid-bg opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[20%] w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-[10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'py-6'}`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">ContribTrust</span>
              </Link>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                <Link href="#problem" className="text-gray-400 hover:text-white transition-colors">Problem</Link>
                <Link href="#solution" className="text-gray-400 hover:text-white transition-colors">Solution</Link>
                <Link href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link>
                <Link href="#features" className="text-gray-400 hover:text-white transition-colors">Features</Link>
              </div>

              <div className="hidden md:flex items-center gap-4">
                <a href="https://github.com/envystilllearning/contribtrust" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <Link href="/dashboard" className="px-5 py-2.5 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-200">
                  Launch App
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-gray-400 hover:text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 p-4 glass rounded-xl">
                <div className="flex flex-col gap-4">
                  <Link href="#problem" className="text-gray-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Problem</Link>
                  <Link href="#solution" className="text-gray-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Solution</Link>
                  <Link href="#how-it-works" className="text-gray-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>How It Works</Link>
                  <Link href="#features" className="text-gray-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Features</Link>
                  <div className="h-px bg-gray-800" />
                  <Link href="/dashboard" className="px-5 py-2.5 bg-cyan-400 text-black font-semibold rounded-lg text-center">
                    Launch App
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-40 pb-32">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-12 animate-float">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-gray-300">
                Proof of Contribution Protocol
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                Live on Solana
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[0.95] tracking-tight">
              <span className="gradient-text">ContribTrust</span>
            </h1>

            {/* Subtitle */}
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 leading-relaxed max-w-4xl mx-auto font-light">
              The trust layer for <span className="text-cyan-400 font-semibold">AI-powered contributions</span> in the Solana ecosystem.
            </p>

            {/* Description */}
            <p className="text-lg text-gray-500 mb-16 max-w-2xl mx-auto leading-relaxed">
              AI has made creating contributions cheap. We build the infrastructure that identifies which contributions actually matter — and makes them verifiable on-chain.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link 
                href="/dashboard" 
                className="group px-10 py-5 bg-cyan-400 text-black font-bold rounded-xl hover:bg-cyan-300 transition-all duration-300 flex items-center gap-3 glow text-lg"
              >
                Launch Dashboard
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center gap-3">
                <a 
                  href="https://github.com/envystilllearning/contribtrust" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-5 glass rounded-xl hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  View Source
                </a>
                <button 
                  onClick={copyAddress}
                  className="px-4 py-5 glass rounded-xl hover:bg-white/5 transition-all duration-300 flex items-center gap-2 text-sm text-gray-400"
                  title="Copy link"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="container mx-auto px-4 py-32">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-rose-500/20 border border-red-500/30 flex items-center justify-center">
                <Shield className="w-7 h-7 text-red-400" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">The Problem</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  AI doesn't just accelerate software development — it accelerates <em className="text-white">contribution creation</em>. 
                  In the coming years, everyone will be able to generate pull requests, documentation, research, 
                  design, and governance proposals in minutes using AI.
                </p>
                <p>
                  The result is exponential growth in contribution volume. The problem is no longer 
                  a shortage of contributors — it's determining which contributions actually matter.
                </p>
              </div>
              
              <div className="glass-card rounded-2xl p-8 gradient-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-red-400">The Trust Gap</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Today's ecosystem still measures contributions with simple metrics: PR count, thread count, Discord activity. 
                      These metrics are becoming irrelevant when AI can produce output at scale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="container mx-auto px-4 py-32">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
                <Zap className="w-7 h-7 text-cyan-400" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">The Solution</h2>
            </div>
            
            <div className="text-center mb-20">
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                <span className="text-cyan-400 font-semibold">Proof of Contribution Protocol</span> — 
                an AI-powered reputation layer that evaluates contributions across platforms 
                and generates a verifiable Contribution Passport.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "AI Analysis",
                  desc: "Understands context, originality, technical depth, and community impact — not just counts.",
                  gradient: "from-cyan-500/20 to-blue-500/20",
                  border: "border-cyan-500/30",
                  iconColor: "text-cyan-400"
                },
                {
                  icon: Lock,
                  title: "On-Chain Credential",
                  desc: "Your reputation is portable across Solana protocols. No more rebuilding credibility from zero.",
                  gradient: "from-emerald-500/20 to-green-500/20",
                  border: "border-emerald-500/30",
                  iconColor: "text-emerald-400"
                },
                {
                  icon: Award,
                  title: "Contribution Passport",
                  desc: "A verifiable profile showing your real impact. Used by protocols, DAOs, grants, and hackathons.",
                  gradient: "from-purple-500/20 to-pink-500/20",
                  border: "border-purple-500/30",
                  iconColor: "text-purple-400"
                }
              ].map((feature, i) => (
                <div key={i} className="group glass-card rounded-3xl p-10 hover:bg-white/[0.04] transition-all duration-500 border border-gray-800/50">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} border ${feature.border} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="container mx-auto px-4 py-32">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">How It Works</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Connect Accounts",
                  desc: "Link your GitHub, Twitter, Discord — we'll ingest your contributions automatically.",
                  icon: Github,
                  color: "cyan"
                },
                {
                  step: "02",
                  title: "AI Analysis",
                  desc: "Our AI evaluates originality, technical depth, community impact across 6 dimensions.",
                  icon: Zap,
                  color: "emerald"
                },
                {
                  step: "03",
                  title: "Mint Passport",
                  desc: "Generate your Contribution Passport NFT — a portable, verifiable on-chain credential.",
                  icon: Award,
                  color: "purple"
                }
              ].map((item, i) => (
                <div key={i} className="relative group">
                  {/* Connector Line */}
                  {i < 2 && (
                    <div className="hidden md:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent -translate-x-4" />
                  )}
                  
                  <div className="glass-card rounded-3xl p-10 text-center h-full border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                    <div className="text-6xl font-bold text-gray-800 mb-6">{item.step}</div>
                    <div className={`w-20 h-20 rounded-2xl mx-auto mb-8 flex items-center justify-center ${
                      item.color === 'cyan' ? 'bg-cyan-500/10 border border-cyan-500/30' :
                      item.color === 'emerald' ? 'bg-emerald-500/10 border border-emerald-500/30' :
                      'bg-purple-500/10 border border-purple-500/30'
                    }`}>
                      <item.icon className={`w-10 h-10 ${
                        item.color === 'cyan' ? 'text-cyan-400' :
                        item.color === 'emerald' ? 'text-emerald-400' :
                        'text-purple-400'
                      }`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="container mx-auto px-4 py-32">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Built for the Solana Ecosystem</h2>
            <p className="text-xl text-gray-400 mb-16 text-center max-w-2xl mx-auto">
              Everything you need to prove your contributions and build portable reputation.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "6-Dimension Scoring",
                  desc: "Originality, Technical Depth, Community Impact, Consistency, Collaboration, Long-term Value — evaluated by AI, not vanity metrics.",
                  icon: CheckCircle2,
                  color: "cyan"
                },
                {
                  title: "Anchor SBT Program",
                  desc: "Solana-native Soulbound Tokens. Non-transferable, verifiable credentials stored on-chain forever.",
                  icon: Lock,
                  color: "emerald"
                },
                {
                  title: "Multi-Platform Ingest",
                  desc: "GitHub, Twitter, Discord contributions aggregated into a unified reputation profile automatically.",
                  icon: Globe,
                  color: "blue"
                },
                {
                  title: "Portable Reputation",
                  desc: "Use your Contribution Passport across Solana protocols, DAOs, grants, and hackathons — no more rebuilding credibility.",
                  icon: Award,
                  color: "purple"
                }
              ].map((feature, i) => (
                <div key={i} className="glass-card rounded-2xl p-8 border border-gray-800/50 hover:border-cyan-500/20 transition-all duration-300 group">
                  <div className="flex items-start gap-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      feature.color === 'cyan' ? 'bg-cyan-500/10 border border-cyan-500/20' :
                      feature.color === 'emerald' ? 'bg-emerald-500/10 border border-emerald-500/20' :
                      feature.color === 'blue' ? 'bg-blue-500/10 border border-blue-500/20' :
                      'bg-purple-500/10 border border-purple-500/20'
                    }`}>
                      <feature.icon className={`w-6 h-6 ${
                        feature.color === 'cyan' ? 'text-cyan-400' :
                        feature.color === 'emerald' ? 'text-emerald-400' :
                        feature.color === 'blue' ? 'text-blue-400' :
                        'text-purple-400'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="glass rounded-3xl p-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Built On", value: "Solana", icon: Globe },
                { label: "Powered By", value: "Hermes AI", icon: Zap },
                { label: "License", value: "MIT", icon: CheckCircle2 },
                { label: "Status", value: "Live", icon: Award }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <stat.icon className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-gray-500">{stat.label}</span>
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to prove your<br />
              <span className="gradient-text">contributions?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-14 max-w-xl mx-auto leading-relaxed">
              Generate your Contribution Passport and make your impact verifiable on-chain.
            </p>
            <Link 
              href="/dashboard" 
              className="inline-flex items-center gap-3 px-14 py-6 bg-cyan-400 text-black font-bold rounded-2xl hover:bg-cyan-300 transition-all duration-300 text-xl glow"
            >
              Launch Dashboard
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800/50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold gradient-text">ContribTrust</span>
                </div>
                <p className="text-gray-500 max-w-md leading-relaxed mb-6">
                  The trust layer for AI-powered contributions in the Solana ecosystem. 
                  Making impact verifiable, one contribution at a time.
                </p>
                <div className="flex gap-4">
                  <a href="https://github.com/envystilllearning/contribtrust" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/5 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com/fachrulfnd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/5 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="https://discord.gg/contribtrust" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/5 transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-6 text-gray-200">Product</h4>
                <div className="space-y-3">
                  <Link href="/dashboard" className="block text-gray-500 hover:text-white transition-colors">Dashboard</Link>
                  <Link href="/passport" className="block text-gray-500 hover:text-white transition-colors">Passport</Link>
                  <a href="https://github.com/envystilllearning/contribtrust" target="_blank" rel="noopener noreferrer" className="block text-gray-500 hover:text-white transition-colors">Open Source</a>
                  <Link href="#" className="block text-gray-500 hover:text-white transition-colors">Documentation</Link>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-6 text-gray-200">Community</h4>
                <div className="space-y-3">
                  <a href="https://twitter.com/fachrulfnd" target="_blank" rel="noopener noreferrer" className="block text-gray-500 hover:text-white transition-colors">Twitter / X</a>
                  <a href="https://discord.gg/contribtrust" target="_blank" rel="noopener noreferrer" className="block text-gray-500 hover:text-white transition-colors">Discord</a>
                  <a href="https://github.com/envystilllearning/contribtrust" target="_blank" rel="noopener noreferrer" className="block text-gray-500 hover:text-white transition-colors">GitHub</a>
                  <a href="mailto:fachrulfnd@pm.me" className="block text-gray-500 hover:text-white transition-colors">Contact</a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm">
                © 2025 ContribTrust. Open source under MIT License.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Built with</span>
                <span className="text-cyan-400">♥</span>
                <span>on Solana</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
