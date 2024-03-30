/**
 * Fetches a resource and tracks download progress. Uses XHR for progress events.
 *
 * Example: fetchWithProgress("/file", progress => ...)
 *
 * @author @dailker
 * @param {string} url - The URL to fetch.
 * @param {(progress: number) => void} onProgress - Progress callback (0-1).
 * @returns {Promise<Blob>} The downloaded Blob.
 */
export function fetchWithProgress(url: string, onProgress: (progress: number) => void): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onprogress = e => {
      if (e.lengthComputable) onProgress(e.loaded / e.total);
    };
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) resolve(xhr.response);
      else reject(new Error(`HTTP ${xhr.status}`));
    };
    xhr.onerror = () => reject(new Error('Network error'));
    xhr.send();
  });
}
