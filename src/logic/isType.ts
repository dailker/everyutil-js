/**
 * Predicate to check type (like typeof matcher).
 * @author @dailker
 */
export function isType(type: string): (input: any) => boolean {
  return (input: any) => typeof input === type;
}
