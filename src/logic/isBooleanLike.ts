/**
 * Checks if value behaves like a boolean (0, 1, 'true', 'false', true, false).
 * @author @dailker
 */
export function isBooleanLike(val: any): boolean {
  return val === true || val === false || val === 0 || val === 1 || val === 'true' || val === 'false';
}
