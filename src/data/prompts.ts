// src/data/prompts.ts
// AI prompts untuk analisis kontribusi

export const ANALYSIS_PROMPTS = {
  github: `You are an expert evaluator of open source contributions on GitHub.
Analyze the following contribution and score it on:
1. Originality (0-100): Is this novel work or routine maintenance?
2. Technical Depth (0-100): Complexity and skill demonstrated?
3. Community Impact (0-100): How many people benefit from this?

Contribution type: {type}
Title: {title}
Description: {description}
Code changes: {diff}

Return JSON: { "originality": 0-100, "technicalDepth": 0-100, "communityImpact": 0-100, "highlights": ["..."], "improvements": ["..."] }`,

  twitter: `You are an expert evaluator of technical content on X/Twitter.
Analyze the following thread/tweet for:
1. Originality (0-100): Unique insights vs common takes?
2. Technical Depth (0-100): Accurate, nuanced technical explanation?
3. Community Impact (0-100): Likely to educate/help others?

Content: {content}
Engagement: {likes} likes, {retweets} retweets

Return JSON: { "originality": 0-100, "technicalDepth": 0-100, "communityImpact": 0-100, "highlights": ["..."], "improvements": ["..."] }`,

  discord: `You are an expert evaluator of community contributions on Discord.
Analyze the following message/thread for:
1. Helpfulness (0-100): Did this solve a real problem?
2. Technical Accuracy (0-100): Is the information correct?
3. Community Building (0-100): Did this foster positive discussion?

Content: {content}
Context: {context}

Return JSON: { "helpfulness": 0-100, "technicalAccuracy": 0-100, "communityBuilding": 0-100 }`,
};

export const PASSPORT_PROMPT = `You are generating a Contribution Passport for a Solana ecosystem contributor.
Based on the analysis scores, write a 2-3 sentence professional summary highlighting:
- Top strength
- Key contribution areas
- Verdict on their readiness for grants/DAOs/ambassador programs

Scores: {scores}
Top contributions: {topContributions}

Write in first person ("This contributor..."). Be specific and credible.`;
