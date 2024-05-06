/**
 * Promisified, fallback-enabled getUserMedia.
 *
 * Example: getUserMediaSafe({ video: true })
 *
 * @author @dailker
 * @param {MediaStreamConstraints} constraints - Media constraints.
 * @returns {Promise<MediaStream|null>} MediaStream or null if failed.
 */
export async function getUserMediaSafe(constraints: MediaStreamConstraints): Promise<MediaStream | null> {
  try {
    return await navigator.mediaDevices.getUserMedia(constraints);
  } catch {
    return null;
  }
}
