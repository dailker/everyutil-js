/**
 * Checks if a content-type is JSON.
 * @param contentType The content-type string.
 * @returns True if JSON content-type.
 */
export function isJSONContentType(contentType: string): boolean {
  return /application\/(json|[\w.+-]*\+json)(;|$)/i.test(contentType);
}
