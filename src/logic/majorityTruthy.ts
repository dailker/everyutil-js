/**
 * Returns true if the majority of arguments are truthy.
 * @author @dailker
 */
export function majorityTruthy(...args: any[]): boolean {
  const count = args.filter(Boolean).length;
  return count > args.length / 2;
}
