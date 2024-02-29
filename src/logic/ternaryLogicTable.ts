/**
 * Evaluates 3-valued logic combinations (like SQL NULL logic).
 * @author @dailker
 */
export function ternaryLogicTable(truthy: boolean, falsy: boolean, unknown: boolean): string {
  if (unknown) return 'unknown';
  if (truthy) return 'true';
  if (falsy) return 'false';
  return 'indeterminate';
}
