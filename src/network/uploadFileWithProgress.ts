/**
 * Uploads a file to a URL with progress events.
 *
 * Example: uploadFileWithProgress(file, url, p => ...)
 *
 * @author @dailker
 * @param {File} file - The file to upload.
 * @param {string} url - The upload URL.
 * @param {(progress: number) => void} onProgress - Progress callback (0-1).
 * @returns {Promise<Response>} The fetch response.
 */
export function uploadFileWithProgress(file: File, url: string, onProgress: (progress: number) => void): Promise<Response> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.upload.onprogress = e => {
      if (e.lengthComputable) onProgress(e.loaded / e.total);
    };
    xhr.onload = () => {
      resolve(new Response(xhr.response, { status: xhr.status, statusText: xhr.statusText }));
    };
    xhr.onerror = () => reject(new Error('Upload failed'));
    const form = new FormData();
    form.append('file', file);
    xhr.send(form);
  });
}
