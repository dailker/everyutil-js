/**
 * Selects a geo-based resource URL based on region data.
 *
 * Example: getGeoBasedURL("https://cdn.com/asset", { region: "eu" }) → "https://cdn-eu.com/asset"
 *
 * @author @dailker
 * @param {string} baseUrl - The base URL.
 * @param {{ region?: string, [key: string]: any }} geoData - Geo info (e.g., region).
 * @returns {string} The geo-based URL.
 */
export function getGeoBasedURL(baseUrl: string, geoData: { region?: string, [key: string]: any }): string {
  if (geoData.region) {
    return baseUrl.replace('cdn.', `cdn-${geoData.region}.`);
  }
  return baseUrl;
}
