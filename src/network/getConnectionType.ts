/**
 * Gets the connection type (e.g., '4g', 'wifi') using navigator.connection.
 *
 * Example: getConnectionType() → "4g"
 *
 * @author @dailker
 * @returns {string|null} The connection type or null if unavailable.
 */
export function getConnectionType(): string | null {
  if (typeof navigator !== 'undefined' && 'connection' in navigator) {
    // @ts-ignore
    return navigator.connection.effectiveType || null;
  }
  return null;
}
