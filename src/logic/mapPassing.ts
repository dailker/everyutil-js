/**
 * Applies transform only to passing items.
 * @author @dailker
 * @param items - The array of items to filter and transform.
 * @param predicate - The predicate function to determine which items pass.
 * @param transform - The transformation function to apply to passing items.
 * @returns The array of transformed items that passed the predicate.
 */
export function mapPassing<T, R>(items: T[], predicate: (x: T) => boolean, transform: (x: T) => R): R[] {
  return items.filter(predicate).map(transform);
}
