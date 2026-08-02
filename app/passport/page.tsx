'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2, Github, Twitter, MessageSquare, FileText, Zap } from 'lucide-react';
export default function PassportPage() {
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScore(78);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Generating Your Contribution Passport...</h1>
        <p className="text-gray-400">AI is analyzing your contributions</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-2">Your Contribution Passport</h1>
      <p className="text-gray-400 mb-8">On-chain verified reputation for Solana ecosystem</p>

      {/* Score Card */}
      <div className="mb-8 p-8 border border-gray-800 rounded max-w-2xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Overall Score</h2>
          <span className="text-5xl font-bold text-brand-accent">{score}/100</span>
        </div>

        {/* Breakdown */}
        <div className="space-y-4 mb-8">
          <div>
            <div className="flex justify-between mb-1">
              <span>Originality</span>
              <span>82</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div className="bg-brand-accent h-2 rounded-full" style={{ width: '82%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>Technical Depth</span>
              <span>75</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div className="bg-brand-accent h-2 rounded-full" style={{ width: '75%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>Community Impact</span>
              <span>79</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div className="bg-brand-accent h-2 rounded-full" style={{ width: '79%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span>Consistency</span>
              <span>71</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div className="bg-brand-accent h-2 rounded-full" style={{ width: '71%' }} />
            </div>
          </div>
        </div>

        {/* On-chain Badge */}
        <div className="flex items-center gap-2 p-4 bg-brand-accent/10 rounded mb-6">
          <CheckCircle2 className="text-brand-accent" size={24} />
          <div>
            <p className="font-semibold">On-Chain Verified</p>
            <p className="text-sm text-gray-400">Fingerprint stored on Solana — portable reputation</p>
          </div>
        </div>

        {/* Share */}
        <button className="px-6 py-3 bg-brand-accent text-black font-semibold rounded">
          Share Passport
        </button>
      </div>

      {/* Top Contributions */}
      <div className="max-w-2xl">
        <h3 className="text-xl font-bold mb-4">Top Contributions</h3>
        <div className="space-y-3">
          {[
            { type: 'GitHub PR', desc: 'Added wallet adapter integration to SMIS', score: 92, icon: Github },
            { type: 'X Thread', desc: 'Thread tentang RLNC untuk data availability', score: 88, icon: Twitter },
            { type: 'Research', desc: 'Analisis throughput Optimum Protocol', score: 85, icon: FileText },
            { type: 'Community', desc: 'Moderasi dan onboarding Discord SMIS', score: 78, icon: MessageSquare },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 border border-gray-800 rounded">
              <div className="p-2 bg-gray-900 rounded">
                <item.icon size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-400">{item.type}</p>
                <p className="font-medium">{item.desc}</p>
              </div>
              <span className="text-brand-accent font-bold">{item.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
