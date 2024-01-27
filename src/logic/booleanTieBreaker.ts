/**
 * Resolves tie between two flags based on backup input.
 * @author @dailker
 */
export function booleanTieBreaker(primary: boolean, secondary: boolean, backup: boolean): boolean {
  return primary === secondary ? backup : (primary ? primary : secondary);
}
