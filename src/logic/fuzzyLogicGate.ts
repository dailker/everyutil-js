/**
 * Apply fuzzy logic operators to [0,1]-normalized boolean-like values.
 * @author @dailker
 */
export function fuzzyLogicGate(type: 'and' | 'or' | 'not', values: number[]): number {
  switch (type) {
    case 'and': return Math.min(...values);
    case 'or': return Math.max(...values);
    case 'not': return 1 - (values[0] || 0);
    default: return 0;
  }
}
