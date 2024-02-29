/**
 * Maintains an internal boolean state and toggles it only when fn() returns true.
 * @author @dailker
 */
export function toggleOnCondition(fn: () => boolean): () => boolean {
  let state = false;
  return () => {
    if (fn()) state = !state;
    return state;
  };
}
