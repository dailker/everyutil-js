/**
 * Efficiently computes (base^exponent) % modulus.
 * @author @dailker
 * @param {number} base
 * @param {number} exponent
 * @param {number} modulus
 * @returns {number}
 */
export function modularExponentiation(base: number, exponent: number, modulus: number): number {
  let result = 1;
  base = base % modulus;
  while (exponent > 0) {
    if (exponent % 2 === 1) result = (result * base) % modulus;
    exponent = Math.floor(exponent / 2);
    base = (base * base) % modulus;
  }
  return result;
}
