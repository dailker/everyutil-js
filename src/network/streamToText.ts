/**
 * Converts a ReadableStream to a string.
 *
 * @author @dailker
 * @param {ReadableStream} stream - The ReadableStream to convert.
 * @returns {Promise<string>} The string content.
 */
export async function streamToText(stream: ReadableStream): Promise<string> {
  const reader = stream.getReader();
  let result = '';
  const decoder = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    result += decoder.decode(value, { stream: true });
  }
  result += decoder.decode();
  return result;
}
