/**
 * Converts a Blob or File to a base64 Data URL.
 *
 * Example: toDataURL(blob) → "data:..."
 *
 * @author @dailker
 * @param {Blob} blob - The Blob or File.
 * @returns {Promise<string>} The Data URL.
 */
export function toDataURL(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
