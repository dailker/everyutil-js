/**
 * Generates a random truth table for logic testing or mutation-based AI.
 * @author @dailker
 */
export function simulateRandomTruthTable(numInputs: number): boolean[][] {
  const rows = 1 << numInputs;
  return Array.from({ length: rows }, () => Array.from({ length: numInputs }, () => Math.random() < 0.5));
}
