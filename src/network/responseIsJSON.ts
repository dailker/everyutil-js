/**
 * Tries to auto-detect if a response is JSON by content-type.
 *
 * @author @dailker
 * @param {Response} res - The fetch response.
 * @returns {boolean} True if JSON, false otherwise.
 */
export function responseIsJSON(res: Response): boolean {
  const ct = res.headers.get('content-type');
  return !!ct && ct.includes('application/json');
}
