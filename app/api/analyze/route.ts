// src/app/api/analyze/route.ts
// POST /api/analyze — analyze contributions

import { NextRequest, NextResponse } from 'next/server';
import { analyzeContributions } from '../../../lib/hermes';
import { ANALYSIS_PROMPTS } from '../../../data/prompts';

function deterministicMock(body: { githubUsername?: string; twitterUsername?: string; contributions?: Array<{ platform: string; type: string; content: string; metadata: Record<string, any> }> }) {
  const seed = [body.githubUsername, body.twitterUsername, body.contributions?.length ?? 0].filter(Boolean).join('-');
  const base = seed ? seed.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0) : 7;
  const clamp = (n: number) => Math.min(100, Math.max(60, n));
  const originality = clamp((base * 7) % 30 + 70);
  const technicalDepth = clamp((base * 11) % 30 + 70);
  const communityImpact = clamp((base * 13) % 30 + 70);
  const consistency = clamp((base * 17) % 30 + 70);
  const collaboration = clamp((base * 19) % 30 + 70);
  const overallScore = Math.round((originality + technicalDepth + communityImpact + consistency + collaboration) / 5);

  return {
    mode: 'mock',
    originality,
    technicalDepth,
    communityImpact,
    consistency,
    collaboration,
    overallScore,
    highlights: [
      'Strong technical contributions to core protocols',
      'Consistent community engagement',
      'Clear documentation and explanation skills',
    ],
    improvements: [
      'More open source collaboration',
      'Long-form technical writing',
    ],
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { githubUsername, twitterUsername, contributions } = body;

    if (!githubUsername && !twitterUsername) {
      return NextResponse.json(
        { error: 'Provide at least githubUsername or twitterUsername' },
        { status: 400 }
      );
    }

    const HERMES_API_KEY = process.env.HERMES_API_KEY;
    if (HERMES_API_KEY) {
      const analysis = await analyzeContributions({
        githubUsername,
        twitterUsername,
        contributions: contributions || [],
      });
      return NextResponse.json({ ...analysis, mode: 'live' });
    }

    return NextResponse.json(deterministicMock({ githubUsername, twitterUsername, contributions }));
  } catch (error) {
    console.error('Analysis error:', error);
    return NextResponse.json(
      { error: 'Analysis failed', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
