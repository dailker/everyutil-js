/**
 * Converts strings like 'yes', 1, 'true', etc. to boolean reliably.
 * @author @dailker
 */
export function coerceToBool(input: any, strict = false): boolean {
  if (typeof input === 'boolean') return input;
  if (typeof input === 'number') return strict ? input === 1 : input !== 0;
  if (typeof input === 'string') {
    const val = input.trim().toLowerCase();
    if (strict) return val === 'true' || val === '1' || val === 'yes';
    return !['', '0', 'false', 'no', 'null', 'undefined', 'nan'].includes(val);
  }
  return Boolean(input);
}
