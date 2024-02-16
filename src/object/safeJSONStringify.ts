/**
 * Stringifies object safely handling cycles (circular refs).
 * @author @dailker
 * @param {any} obj
 * @returns {string}
 */
export function safeJSONStringify(obj: any): string {
  const seen = new WeakSet();
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) return '[Circular]';
      seen.add(value);
    }
    return value;
  });
}
