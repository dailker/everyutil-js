/**
 * Accumulates "pressure" from repeated true inputs and fires once it crosses a threshold.
 * @author @dailker
 */
export function booleanIntegrator(threshold: number) {
  let sum = 0;
  return (val: boolean) => {
    if (val) sum++;
    if (sum >= threshold) {
      sum = 0;
      return true;
    }
    return false;
  };
}
