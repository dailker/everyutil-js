/**
 * Detects upward trend (e.g. mostly false → true) over a sliding window.
 * @author @dailker
 */
export function isRisingSignal(array: boolean[], window: number): boolean {
  if (array.length < window) return false;
  let count = 0;
  for (let i = array.length - window; i < array.length; i++) if (array[i]) count++;
  return count > window / 2;
}
