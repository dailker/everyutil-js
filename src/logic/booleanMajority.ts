/**
 * Returns true if most flags are true.
 * @author @dailker
 */
export function booleanMajority(...flags: boolean[]): boolean {
  const count = flags.filter(Boolean).length;
  return count > flags.length / 2;
}
