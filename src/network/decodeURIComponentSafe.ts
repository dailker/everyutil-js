/**
 * Safely decodes a URI component, handling malformed sequences.
 * @param value The value to decode.
 * @returns The decoded string, or the original if malformed.
 */
export function decodeURIComponentSafe(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}
