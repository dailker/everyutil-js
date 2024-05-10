/**
 * Extracts IPs, ports, and codecs from an ICE candidate string.
 *
 * Example: parseCandidateInfo(candidate)
 *
 * @author @dailker
 * @param {string} candidate - ICE candidate string.
 * @returns {{ ip?: string, port?: string, protocol?: string, type?: string }} Info object.
 */
export function parseCandidateInfo(candidate: string): { ip?: string, port?: string, protocol?: string, type?: string } {
  const parts = candidate.split(' ');
  return {
    ip: parts[4],
    port: parts[5],
    protocol: parts[2],
    type: parts[7]
  };
}
