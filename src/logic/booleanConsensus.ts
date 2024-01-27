/**
 * Returns true if all flags agree (all true or all false).
 * @author @dailker
 */
export function booleanConsensus(...flags: boolean[]): boolean {
  return flags.every(f => f === flags[0]);
}
