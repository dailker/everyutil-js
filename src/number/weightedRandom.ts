/**
 * Returns a random choice from the input choices array, using the given weights.
 * @author @dailker
 * @param {number[]} choices - The array of possible choices.
 * @param {number[]} weights - The array of weights corresponding to each choice.
 * @returns {number} A randomly selected value from choices, weighted by weights.
 */
export function weightedRandom(choices: number[], weights: number[]): number {
  const sum = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * sum;
  for (let i = 0; i < choices.length; i++) {
    if (r < weights[i]) return choices[i];
    r -= weights[i];
  }
  return choices[choices.length - 1];
}
