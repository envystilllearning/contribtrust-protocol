// src/app/api/analyze/route.ts
// POST /api/analyze — Analisis kontribusi dengan Hermes AI

import { NextRequest, NextResponse } from 'next/server';
import { analyzeContributions, generatePassport } from '@/lib/hermes';
import { ANALYSIS_PROMPTS } from '@/data/prompts';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { githubUsername, twitterUsername, contributions } = body;

    // Validasi
    if (!githubUsername && !twitterUsername) {
      return NextResponse.json(
        { error: 'Provide at least githubUsername or twitterUsername' },
        { status: 400 }
      );
    }

    // Jika ada Hermes API key, gunakan itu
    const HERMES_API_KEY = process.env.HERMES_API_KEY;
    if (HERMES_API_KEY) {
      const analysis = await analyzeContributions({
        githubUsername,
        twitterUsername,
        contributions: contributions || [],
      });
      return NextResponse.json(analysis);
    }

    // Mock response untuk MVP (tanpa Hermes API)
    console.log('No HERMES_API_KEY set, returning mock analysis');
    
    const mockAnalysis = {
      originality: Math.floor(Math.random() * 30) + 70,
      technicalDepth: Math.floor(Math.random() * 30) + 70,
      communityImpact: Math.floor(Math.random() * 30) + 70,
      consistency: Math.floor(Math.random() * 30) + 70,
      collaboration: Math.floor(Math.random() * 30) + 70,
      overallScore: Math.floor(Math.random() * 30) + 70,
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

    return NextResponse.json(mockAnalysis);
  } catch (error) {
    console.error('Analysis error:', error);
    return NextResponse.json(
      { error: 'Analysis failed', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
