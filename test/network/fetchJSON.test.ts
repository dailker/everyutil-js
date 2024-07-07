import { fetchJSON } from '../../src/network/fetchJSON';

describe('fetchJSON', () => {
  it('returns parsed JSON on success', async () => {
    global.fetch = jest.fn(async () => ({ json: async () => ({ ok: true, foo: 1 }) })) as any;
    const res = await fetchJSON('/api');
    expect(res).toEqual({ ok: true, foo: 1 });
  });
  it('returns null on fetch error', async () => {
    global.fetch = jest.fn(async () => { throw new Error('fail'); }) as any;
    const res = await fetchJSON('/fail');
    expect(res).toBeNull();
  });
});
