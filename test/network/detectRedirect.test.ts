import { detectRedirect } from '../../src/network/detectRedirect';

describe('detectRedirect', () => {
  it('follows redirects up to maxRedirects (mocked)', async () => {
    let call = 0;
    global.fetch = jest.fn(async (url, opts) => {
      call++;
      if (call < 3) {
        return { status: 302, headers: { get: () => 'next' }, ok: false } as any;
      }
      return { status: 200, headers: { get: () => null }, ok: true } as any;
    }) as any;
    const res = await detectRedirect('start');
    expect(res.status).toBe(200);
  });
});
