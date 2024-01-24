/**
 * Escapes HTML entities in a string.
 * @author @dailker
 * @param {string} str
 * @returns {string}
 */
export function htmlEscape(str: string): string {
  return str.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c] ?? c));
}
