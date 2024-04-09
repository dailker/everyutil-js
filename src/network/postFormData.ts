/**
 * POSTs multipart/form-data using FormData.
 *
 * Example: postFormData("/upload", formData)
 *
 * @author @dailker
 * @param {string} url - The URL to POST to.
 * @param {FormData} formData - The FormData object.
 * @returns {Promise<Response>} The fetch response.
 */
export function postFormData(url: string, formData: FormData): Promise<Response> {
  return fetch(url, { method: 'POST', body: formData });
}
