import { downloadAsBlob } from '../../src/network/downloadAsBlob';

describe('downloadAsBlob', () => {
  it('downloads as Blob (mocked)', async () => {
    global.fetch = jest.fn(async () => ({ ok: true, blob: async () => 'blobdata' })) as any;
    const res = await downloadAsBlob('/file.png');
    expect(res).toBe('blobdata');
  });
  it('throws on HTTP error', async () => {
    global.fetch = jest.fn(async () => ({ ok: false, status: 404 })) as any;
    await expect(downloadAsBlob('/fail')).rejects.toThrow('HTTP 404');
  });
});
