/**
 * Maps values and removes falsy results in one step.
 * @author @dailker
 * @template T, U
 * @param {T[]} array
 * @param {(item: T, idx: number, arr: T[]) => U} fn
 * @returns {NonNullable<U>[]}
 */
export function compactMap<T, U>(array: T[], fn: (item: T, idx: number, arr: T[]) => U): NonNullable<U>[] {
  const result: NonNullable<U>[] = [];
  for (let i = 0; i < array.length; i++) {
    const mapped = fn(array[i], i, array);
    if (mapped) result.push(mapped as NonNullable<U>);
  }
  return result;
}
