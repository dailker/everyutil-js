/**
 * Gets the connection type (Wi-Fi, 4G, etc.) from navigator.connection.
 *
 * @author @dailker
 * @returns {string | null} The connection type or null.
 */
export function connectionType(): string | null {
  // @ts-ignore
  return navigator.connection?.effectiveType || navigator.connection?.type || null;
}
