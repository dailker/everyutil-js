/**
 * Emits true/false based on a predefined sequence (e.g. rhythm pattern).
 * @author @dailker
 */
export function booleanByPattern(pattern: boolean[], repeat = true): () => boolean {
  let i = 0;
  return () => {
    const val = pattern[i];
    i++;
    if (repeat) i %= pattern.length;
    return val;
  };
}
