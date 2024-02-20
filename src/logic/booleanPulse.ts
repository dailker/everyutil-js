/**
 * Returns a pulsing boolean pattern (e.g. true every N cycles for M length).
 * @author @dailker
 */
export function booleanPulse(width: number, period: number): () => boolean {
  let count = 0;
  return () => {
    const on = count % period < width;
    count++;
    return on;
  };
}
