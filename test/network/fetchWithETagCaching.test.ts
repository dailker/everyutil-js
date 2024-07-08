import { fetchWithETagCaching } from '../../src/network/fetchWithETagCaching';

describe('fetchWithETagCaching', () => {
  it('returns etag and notModified=false for 200', async () => {
    const mockRes = { status: 200, headers: { get: (k: string) => k === 'etag' ? 'abc' : null } } as any;
    global.fetch = jest.fn(async () => mockRes);
    const result = await fetchWithETagCaching('url');
    expect(result).toEqual({ response: mockRes, etag: 'abc', notModified: false });
  });
  it('returns notModified=true for 304', async () => {
    const mockRes = { status: 304, headers: { get: () => 'etagval' } } as any;
    global.fetch = jest.fn(async () => mockRes);
    const result = await fetchWithETagCaching('url', 'etagval');
    expect(result).toEqual({ response: mockRes, etag: 'etagval', notModified: true });
  });
});
