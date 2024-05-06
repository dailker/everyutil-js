/**
 * Simple HTTP request wrapper using Node's native modules.
 *
 * Example: httpRequest({ hostname, port, path, method })
 *
 * @author @dailker
 * @param {import('http').RequestOptions} options - HTTP request options.
 * @param {string|Buffer} [body] - Optional request body.
 * @returns {Promise<{ status: number, headers: any, body: Buffer }>} Response object.
 */
export async function httpRequest(options: any, body?: string | Buffer): Promise<{ status: number, headers: any, body: Buffer }> {
  const http = await import('http');
  const https = await import('https');
  const mod = options.protocol === 'https:' ? https : http;
  return new Promise((resolve, reject) => {
    const req = mod.request(options, (res: any) => {
      const chunks: Buffer[] = [];
      res.on('data', (chunk: Buffer) => chunks.push(chunk));
      res.on('end', () => {
        resolve({ status: res.statusCode, headers: res.headers, body: Buffer.concat(chunks) });
      });
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}
