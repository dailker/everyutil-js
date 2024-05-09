/**
 * Parses a CIDR string and returns subnet info.
 *
 * @author @dailker
 * @param {string} cidr - The CIDR string (e.g., 192.168.1.0/24).
 * @returns {{ network: string, mask: string, first: string, last: string, size: number } | null} Subnet info or null.
 */
export function parseCIDR(cidr: string): { network: string, mask: string, first: string, last: string, size: number } | null {
  const m = cidr.match(/^(\d{1,3}(?:\.\d{1,3}){3})\/(\d{1,2})$/);
  if (!m) return null;
  const [_, base, bits] = m;
  const mask = ~(2 ** (32 - +bits) - 1) >>> 0;
  const network = base.split('.').map((x, i) => (+x & (mask >> (8 * (3 - i))) & 255)).join('.');
  const first = network.split('.'); first[3] = (+first[3] + 1).toString();
  const last = network.split('.'); last[3] = (+last[3] + (2 ** (32 - +bits) - 2)).toString();
  return {
    network,
    mask: [mask >>> 24, (mask >> 16) & 255, (mask >> 8) & 255, mask & 255].join('.'),
    first: first.join('.'),
    last: last.join('.'),
    size: 2 ** (32 - +bits)
  };
}
