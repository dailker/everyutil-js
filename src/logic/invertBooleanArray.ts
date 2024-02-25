/**
 * Returns new array with all boolean values flipped.
 * @author @dailker
 */
export function invertBooleanArray(array: boolean[]): boolean[] {
  return array.map(v => !v);
}
