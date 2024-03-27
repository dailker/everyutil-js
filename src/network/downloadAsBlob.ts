/**
 * Downloads a resource as a Blob.
 *
 * Example: downloadAsBlob("/file.png") → Blob
 *
 * @author @dailker
 * @param {string} url - The resource URL.
 * @returns {Promise<Blob>} The downloaded Blob.
 */
export async function downloadAsBlob(url: string): Promise<Blob> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.blob();
}
