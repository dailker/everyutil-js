/**
 * Returns the likely language of a string using simple heuristics.
 *
 * Example: detectLanguage("bonjour") → "fr"
 *
 * @author @dailker
 * @param {string} str - The input string.
 * @returns {string} ISO language code (e.g., 'en', 'fr', 'ru', 'zh', etc.)
 */
export function detectLanguage(str: string): string {
  if (/[а-яА-ЯЁё]/.test(str)) return 'ru';
  if (/[àâçéèêëîïôûùüÿœæ]/i.test(str) || /\b(le|la|les|un|une|des|bonjour|merci)\b/i.test(str)) return 'fr';
  if (/[äöüß]/i.test(str) || /\b(der|die|das|und|ist|ein)\b/i.test(str)) return 'de';
  if (/[áéíóúñü]/i.test(str) || /\b(el|la|los|las|un|una|gracias|hola)\b/i.test(str)) return 'es';
  if (/[\u3040-\u30ff]/.test(str)) return 'ja';
  if (/[\u4e00-\u9fff]/.test(str)) return 'zh';
  return 'en';
}
