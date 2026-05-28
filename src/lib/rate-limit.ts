type Bucket = number[];

const store = new Map<string, Bucket>();

export type RateLimitResult = {
  ok: boolean;
  remaining: number;
  retryAfterSec: number;
};

export function rateLimit(
  key: string,
  limit: number,
  windowMs: number
): RateLimitResult {
  const now = Date.now();
  const windowStart = now - windowMs;
  const bucket = store.get(key) ?? [];
  const pruned: Bucket = [];
  for (const t of bucket) if (t > windowStart) pruned.push(t);

  if (pruned.length >= limit) {
    store.set(key, pruned);
    const oldest = pruned[0];
    const retryAfterMs = Math.max(0, oldest + windowMs - now);
    return {
      ok: false,
      remaining: 0,
      retryAfterSec: Math.ceil(retryAfterMs / 1000),
    };
  }

  pruned.push(now);
  store.set(key, pruned);
  maybeSweep(now, windowMs);
  return {
    ok: true,
    remaining: limit - pruned.length,
    retryAfterSec: 0,
  };
}

function maybeSweep(now: number, windowMs: number) {
  if (Math.random() >= 0.01) return;
  const cutoff = now - windowMs;
  for (const [k, v] of store) {
    let stale = true;
    for (const t of v) {
      if (t > cutoff) {
        stale = false;
        break;
      }
    }
    if (stale) store.delete(k);
  }
}
