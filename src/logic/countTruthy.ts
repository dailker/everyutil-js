/**
 * Count how many arguments are truthy.
 * @author @dailker
 */
export function countTruthy(...args: any[]): number {
  return args.filter(Boolean).length;
}
