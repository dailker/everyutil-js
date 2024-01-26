/**
 * Converts a string to leetspeak.
 * @author @dailker
 * @param {string} str - Input string.
 * @returns {string} Leetspeak string.
 */
export function toLeetspeak(str: string): string {
  const map: Record<string, string> = {A:'4',E:'3',I:'1',O:'0',S:'5',T:'7',a:'4',e:'3',i:'1',o:'0',s:'5',t:'7'};
  return str.replace(/[AEIOSTaeiost]/g, c => map[c] || c);
}
