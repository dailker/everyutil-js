/**
 * Clone with optional transformer at each level.
 * @author @dailker
 * @param {any} obj
 * @param {(value: any, key?: string) => any} [customizer]
 * @returns {any}
 */
export function cloneWithCustomizer(obj: any, customizer?: (value: any, key?: string) => any): any {
  if (customizer) obj = customizer(obj);
  if (Array.isArray(obj)) return obj.map(v => cloneWithCustomizer(v, customizer));
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, cloneWithCustomizer(v, customizer)]));
  }
  return obj;
}
