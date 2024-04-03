/**
 * Returns HTTP status code category as a string.
 * @param statusCode The HTTP status code.
 * @returns Category string (e.g. "success", "clientError").
 */
export function httpStatusCategory(statusCode: number): string {
  if (statusCode >= 100 && statusCode < 200) return 'informational';
  if (statusCode >= 200 && statusCode < 300) return 'success';
  if (statusCode >= 300 && statusCode < 400) return 'redirection';
  if (statusCode >= 400 && statusCode < 500) return 'clientError';
  if (statusCode >= 500 && statusCode < 600) return 'serverError';
  return 'unknown';
}
