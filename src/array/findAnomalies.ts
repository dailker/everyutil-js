/**
 * Finds values that differ statistically or structurally.
 * @author @dailker
 * @param {any[]} array
 * @param {object} [options]
 * @returns {any[]}
 */
export function findAnomalies(array: any[], options?: { zScore?: boolean }): any[] {
  if (options?.zScore && array.every(x => typeof x === 'number')) {
    const mean = array.reduce((a, b) => a + b, 0) / array.length;
    const std = Math.sqrt(array.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / array.length);
    return array.filter(x => Math.abs((x - mean) / (std || 1)) > 2);
  }
  // Type anomaly: lone type
  const typeGroups = array.reduce((acc, v) => {
    const t = typeof v;
    acc[t] = (acc[t] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const rareTypes = Object.entries(typeGroups).filter(([_, c]) => c === 1).map(([t]) => t);
  return array.filter(x => rareTypes.includes(typeof x));
}
