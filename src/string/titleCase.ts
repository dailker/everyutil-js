/**
 * Converts a string to title case with smart exceptions.
 * @author @dailker
 * @param {string} str
 * @returns {string}
 */
export function titleCase(str: string): string {
  const exceptions = ['a','an','the','and','but','or','for','nor','on','at','to','by','with','of','in'];
  return str.toLowerCase().replace(/\w\S*/g, (word, i, all) => {
    if (i !== 0 && exceptions.includes(word)) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
}
