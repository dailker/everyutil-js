/**
 * Unescapes HTML entities in a string.
 * @author @dailker
 * @param {string} str
 * @returns {string}
 */
export function htmlUnescape(str: string): string {
  return str.replace(/&(amp|lt|gt|quot|#39);/g, (m, e: string) => {
    const map: Record<string, string> = {amp:'&',lt:'<',gt:'>',quot:'"','#39':'\''};
    return map[e] ?? m;
  });
}
