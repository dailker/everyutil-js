/**
 * Gets the client's public IP address using an external service.
 *
 * Example: getPublicIP() → "203.0.113.1"
 *
 * @author @dailker
 * @returns {Promise<string|null>} The public IP or null if failed.
 */
export async function getPublicIP(): Promise<string | null> {
  try {
    const res = await fetch('https://api.ipify.org?format=json');
    const data = await res.json();
    return data.ip || null;
  } catch {
    return null;
  }
}
