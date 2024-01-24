/**
 * Parses strings like 2025-W26-3 (year-week-day) into Date.
 * @author @dailker
 * @param {string} str
 * @returns {Date|null}
 */
export function parseISOWeekDate(str: string): Date | null {
  const m = str.match(/(\d{4})-W(\d{2})-(\d)/);
  if (!m) return null;
  const [_, year, week, day] = m;
  const d = new Date(Date.UTC(+year, 0, 1 + (+week - 1) * 7));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + (+day - dayNum));
  return d;
}
