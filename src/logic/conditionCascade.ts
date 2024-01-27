/**
 * Declaratively maps condition to result, e.g. { if: pred, then: val }[].
 * @author @dailker
 */
export function conditionCascade<T, R>(cases: Array<{if: (input: T) => boolean, then: R}>, defaultValue: R): (input: T) => R {
  return (input: T) => {
    for (const c of cases) {
      if (c.if(input)) return c.then;
    }
    return defaultValue;
  };
}
