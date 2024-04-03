/**
 * Safely parses a JSON response, handling errors.
 *
 * @author @dailker
 * @param {Response} response - Fetch response object.
 * @returns {Promise<any|null>} Parsed JSON or null if error.
 */
export async function parseJSONResponse(response: Response): Promise<any | null> {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

/**
 * Retrieve HTTP header value ignoring case.
 *
 * @author @dailker
 * @param {Headers|Record<string,string>} headers - Headers object or plain object.
 * @param {string} key - Header key (case-insensitive).
 * @returns {string|undefined} Header value or undefined.
 */
export function getHeadersCaseInsensitive(headers: Headers | Record<string, string>, key: string): string | undefined {
  if (headers instanceof Headers) {
    for (const [k, v] of headers.entries()) {
      if (k.toLowerCase() === key.toLowerCase()) return v;
    }
  } else {
    for (const k in headers) {
      if (k.toLowerCase() === key.toLowerCase()) return headers[k];
    }
  }
  return undefined;
}

/**
 * Checks if a content-type is JSON.
 *
 * @author @dailker
 * @param {string} contentType - Content-Type header value.
 * @returns {boolean} True if JSON content-type.
 */
export function isJSONContentType(contentType: string): boolean {
  return /application\/(json|[\w.+-]*\+json)/i.test(contentType);
}

/**
 * Returns HTTP status code category as a string.
 *
 * @author @dailker
 * @param {number} statusCode - HTTP status code.
 * @returns {string} Category (e.g. "success", "clientError").
 */
export function httpStatusCategory(statusCode: number): string {
  if (statusCode >= 100 && statusCode < 200) return 'informational';
  if (statusCode >= 200 && statusCode < 300) return 'success';
  if (statusCode >= 300 && statusCode < 400) return 'redirection';
  if (statusCode >= 400 && statusCode < 500) return 'clientError';
  if (statusCode >= 500 && statusCode < 600) return 'serverError';
  return 'unknown';
}
