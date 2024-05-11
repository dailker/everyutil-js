/**
 * Resolves a relative URL against a base URL.
 * @author @dailker
 * @param {string} relative - The relative URL.
 * @param {string} base - The base URL.
 * @returns {string} The resolved absolute URL.
 */
export function resolveRelativeURL(relative: string, base: string): string {
  try {
    return new URL(relative, base).toString();
  } catch {
    return relative;
  }
}
