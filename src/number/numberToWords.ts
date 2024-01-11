/**
 * Converts a number to its English words representation (simple, up to millions).
 * For example, numberToWords(123) returns "one hundred twenty-three".
 * @author @dailker
 * @param {number} n - The number to convert.
 * @returns {string} The English words representation of the number.
 */
const ones = ["zero","one","two","three","four","five","six","seven","eight","nine"];
const teens = ["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const tens = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
export function numberToWords(n: number): string {
  if (n < 0) return "minus " + numberToWords(-n);
  if (n < 10) return ones[n];
  if (n < 20) return teens[n - 10];
  if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? "-" + ones[n % 10] : "");
  if (n < 1000) return ones[Math.floor(n / 100)] + " hundred" + (n % 100 ? " " + numberToWords(n % 100) : "");
  if (n < 1_000_000) return numberToWords(Math.floor(n / 1000)) + " thousand" + (n % 1000 ? " " + numberToWords(n % 1000) : "");
  return n.toString();
}
