/**
 * Fetch with timeout support.
 * @param url The URL to fetch.
 * @param options Fetch options.
 * @param timeoutMs Timeout in milliseconds.
 * @returns The fetch response.
 */
export async function fetchWithTimeout(url: string, options: RequestInit = {}, timeoutMs: number = 5000): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    return response;
  } finally {
    clearTimeout(id);
  }
}
