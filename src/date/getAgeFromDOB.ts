/**
 * Calculates age in years from birthdate.
 * @author @dailker
 * @param {Date} dob
 * @returns {number}
 */
export function getAgeFromDOB(dob: Date): number {
  const now = new Date();
  let age = now.getFullYear() - dob.getFullYear();
  const m = now.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < dob.getDate())) age--;
  return age;
}
