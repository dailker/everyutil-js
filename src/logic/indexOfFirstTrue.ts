/**
 * Finds first index of truthy value.
 * @author @dailker
 */
export function indexOfFirstTrue(array: boolean[]): number {
  return array.findIndex(Boolean);
}
