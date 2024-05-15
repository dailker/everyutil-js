/**
 * Validates a host against the CN/SAN of an SSL certificate (Node.js only).
 *
 * @author @dailker
 * @param {string} host - The hostname to verify.
 * @param {import('tls').PeerCertificate} cert - The certificate object.
 * @returns {boolean} True if host matches cert, false otherwise.
 */
export function verifyHostAgainstCert(host: string, cert: any): boolean {
  if (!cert) return false;
  // Check CN
  if (cert.subject && cert.subject.CN && host === cert.subject.CN) return true;
  // Check SANs
  if (cert.subjectaltname) {
    const sans = cert.subjectaltname.split(',').map((s: string) => s.replace(/DNS:/, '').trim());
    if (sans.includes(host)) return true;
  }
  return false;
}
