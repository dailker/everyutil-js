/**
 * Cleaner alternative to switch statements, supports lazy evaluation.
 * @author @dailker
 */
export function caseSwitch<T, R>(value: T, cases: Record<string, () => R>, fallbackFn?: () => R): R {
  const key = String(value);
  return key in cases ? cases[key]() : fallbackFn ? fallbackFn() : undefined as any;
}
