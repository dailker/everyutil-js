import { batchFetch } from '../../src/network/batchFetch';

describe('batchFetch', () => {
  it('fetches multiple URLs (mocked)', async () => {
    global.fetch = jest.fn(async (url) => ({ url, ok: true })) as any;
    const urls = ['https://a.com', 'https://b.com'];
    const results = await batchFetch(urls, 2);
    expect(results.length).toBe(2);
    expect(results[0]).toHaveProperty('url', 'https://a.com');
    expect(results[1]).toHaveProperty('url', 'https://b.com');
  });

  it('returns null for failed fetch', async () => {
    let count = 0;
    global.fetch = jest.fn(async (url) => { count++; if (count === 2) throw new Error('fail'); return { url, ok: true }; }) as any;
    const urls = ['https://a.com', 'https://b.com'];
    const results = await batchFetch(urls, 2);
    expect(results[1]).toBeNull();
  });
});
