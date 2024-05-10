/**
 * Extracts original IPs/ports from X-Forwarded-* headers.
 *
 * Example: parseForwardedHeader(headers)
 *
 * @author @dailker
 * @param {Record<string, string>} headers - Headers object.
 * @returns {{ for?: string, proto?: string, host?: string }} Parsed info.
 */
export function parseForwardedHeader(headers: Record<string, string>): { for?: string, proto?: string, host?: string } {
  const out: any = {};
  if (headers['x-forwarded-for']) out.for = headers['x-forwarded-for'];
  if (headers['x-forwarded-proto']) out.proto = headers['x-forwarded-proto'];
  if (headers['x-forwarded-host']) out.host = headers['x-forwarded-host'];
  return out;
}
