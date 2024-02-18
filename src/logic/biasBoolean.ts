/**
 * Skews the result using a custom bias function.
 * @author @dailker
 * @param {boolean} value - The boolean value to bias.
 * @param {Function} biasFn - The bias function to apply.
 * @returns {boolean} The biased boolean result.
 */
export function biasBoolean(value: boolean, biasFn: (bool: boolean) => boolean): boolean {
  return biasFn(value);
}
