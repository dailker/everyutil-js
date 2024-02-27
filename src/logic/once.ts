/**
 * Returns true once, then always false.
 * @author @dailker
 */
export function once(fn: () => boolean): () => boolean {
  let called = false;
  return () => {
    if (!called && fn()) {
      called = true;
      return true;
    }
    return false;
  };
}
