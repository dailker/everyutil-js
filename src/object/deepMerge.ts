export function deepMerge<T extends object>(...objects: T[]): T {
  return objects.reduce((acc, obj) => {
    for (const key in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;

      const val = obj[key];
      const accVal = acc[key];

      if (
        val &&
        typeof val === 'object' &&
        !Array.isArray(val)
      ) {
        acc[key] = deepMerge(
          (accVal && typeof accVal === 'object' && !Array.isArray(accVal) ? accVal : {}) as any,
          val as any
        ) as T[Extract<keyof T, string>];
      } else {
        acc[key] = val;
      }
    }
    return acc;
  }, {} as T);
}
