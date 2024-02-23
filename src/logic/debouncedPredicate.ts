/**
 * Prevents the predicate from returning true too frequently in rapid evaluation cycles.
 * @author @dailker
 */
export function debouncedPredicate(fn: () => boolean, delay: number): () => boolean {
  let lastTrue = 0;
  return () => {
    const now = Date.now();
    if (fn() && now - lastTrue > delay) {
      lastTrue = now;
      return true;
    }
    return false;
  };
}
