import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/**
 * Answer engines can only cite pages they are allowed to fetch. The private
 * paths stay closed. The named bots are the ones that feed ChatGPT search,
 * Perplexity, Claude, Gemini and Apple Intelligence. `*` already allows them;
 * the named groups make the choice explicit so a later blanket block does not
 * silently remove the firm from those answers.
 *
 * Training crawlers (GPTBot, ClaudeBot, Google-Extended, Applebot-Extended)
 * are allowed on purpose. Blocking them also blocks the models that quote the
 * firm. Disallow them here if the firm decides it would rather not be in the
 * training sets.
 */
const PRIVATE = ['/admin', '/api'];

const ANSWER_AND_TRAINING_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'Google-Extended',
  'Applebot-Extended',
];

export default function robots(): MetadataRoute.Robots {
  const shared = { allow: '/', disallow: PRIVATE };
  return {
    rules: [
      { userAgent: '*', ...shared },
      ...ANSWER_AND_TRAINING_BOTS.map((userAgent) => ({ userAgent, ...shared })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
