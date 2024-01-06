/**
 * Group by inferred "semantic" types.
 * @author @dailker
 * @param {any[]} array
 * @param {(item: any) => string} [typeFn]
 * @returns {Record<string, any[]>}
 */
export function semanticGroup(array: any[], typeFn: (item: any) => string = x => typeof x): Record<string, any[]> {
  return array.reduce((acc, item) => {
    const type = typeFn(item);
    (acc[type] = acc[type] || []).push(item);
    return acc;
  }, {} as Record<string, any[]>);
}
