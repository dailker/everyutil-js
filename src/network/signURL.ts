/**
 * Appends an HMAC signature to a URL as a query parameter.
 *
 * Example: signURL(url, secret) → url?t=...&sig=...
 *
 * @author @dailker
 * @param {string} url - The URL to sign.
 * @param {string} secret - The secret key.
 * @returns {Promise<string>} The signed URL.
 */
export async function signURL(url: string, secret: string): Promise<string> {
  const u = new URL(url, 'http://x');
  const t = Date.now().toString();
  u.searchParams.set('t', t);
  // Use subtle crypto for HMAC-SHA256
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sigBuf = await crypto.subtle.sign('HMAC', key, enc.encode(u.pathname + u.search + t));
  const sig = Array.from(new Uint8Array(sigBuf)).map(b => b.toString(16).padStart(2, '0')).join('');
  u.searchParams.set('sig', sig);
  return u.pathname + u.search + (u.hash || '');
}
