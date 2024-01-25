/**
 * Parses loosely formatted strings to a Date object.
 * @author @dailker
 * @param {string} str
 * @returns {Date|null}
 */
export function parseFlexibleDate(str: string): Date | null {
  const d = new Date(str);
  return isNaN(d.getTime()) ? null : d;
}
