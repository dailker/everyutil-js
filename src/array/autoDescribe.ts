/**
 * Returns human-readable summary of an array.
 * @author @dailker
 * @param {any[]} array
 * @returns {string}
 */
export function autoDescribe(array: any[]): string {
  const n = array.length;
  const types = Array.from(new Set(array.map(x => typeof x)));
  const unique = new Set(array).size;
  let mean = '';
  if (array.every(x => typeof x === 'number')) {
    const avg = array.reduce((a, b) => a + b, 0) / n;
    mean = `, mean: ${avg.toFixed(2)}`;
  }
  let sorted = '';
  if (array.every(x => typeof x === 'number' || typeof x === 'string')) {
    const asc = array.slice().sort((a, b) => (a > b ? 1 : -1));
    sorted = JSON.stringify(array) === JSON.stringify(asc) ? ', sorted ascending' : '';
  }
  return `Array of ${n} ${types.join('/')}s${mean}, ${unique} unique values${sorted}`;
}
