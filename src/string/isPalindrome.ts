/**
 * Checks if a string is a palindrome, with options to ignore case and spaces.
 *
 * Example: isPalindrome("A man a plan a canal Panama") → true
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @param {boolean} [ignoreCase=true] - Whether to ignore case.
 * @param {boolean} [ignoreSpaces=true] - Whether to ignore spaces.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
export function isPalindrome(str: string, ignoreCase = true, ignoreSpaces = true): boolean {
  let s = str;
  if (ignoreCase) s = s.toLowerCase();
  if (ignoreSpaces) s = s.replace(/\s+/g, '');
  return s === s.split('').reverse().join('');
}
