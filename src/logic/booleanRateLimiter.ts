/**
 * Limits how often a true can be emitted over time.
 * @author @dailker
 */
export function booleanRateLimiter(limit: number, intervalMs: number) {
  let count = 0, lastReset = Date.now();
  return () => {
    const now = Date.now();
    if (now - lastReset > intervalMs) {
      count = 0;
      lastReset = now;
    }
    if (count < limit) {
      count++;
      return true;
    }
    return false;
  };
}
