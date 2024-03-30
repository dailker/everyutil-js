/**
 * Fetches with ETag caching using If-None-Match and handles 304.
 *
 * Example: fetchWithETagCaching(url, etag)
 *
 * @author @dailker
 * @param {string} url - The URL to fetch.
 * @param {string} [previousETag] - Previous ETag value.
 * @returns {Promise<{ response: Response, etag: string|null, notModified: boolean }>} Result object.
 */
export async function fetchWithETagCaching(url: string, previousETag?: string): Promise<{ response: Response, etag: string | null, notModified: boolean }> {
  const headers: Record<string, string> = previousETag ? { 'If-None-Match': previousETag } : {};
  const response = await fetch(url, { headers });
  const etag = response.headers.get('etag');
  const notModified = response.status === 304;
  return { response, etag, notModified };
}
