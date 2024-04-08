/**
 * Safely parses a JSON response, returning null on error.
 * @param response The fetch Response object.
 * @returns The parsed JSON or null.
 */
export async function parseJSONResponse<T = any>(response: Response): Promise<T | null> {
  try {
    return await response.json();
  } catch {
    return null;
  }
}
