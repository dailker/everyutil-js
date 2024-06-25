import { createMockFetch } from '../../src/network/createMockFetch';

describe('createMockFetch', () => {
  it('returns mocked response for route', async () => {
    const mock = createMockFetch({ '/api': { status: 200, body: { ok: true } } });
    const res = await mock('/api');
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toEqual({ ok: true });
  });
  it('returns 404 for unregistered route', async () => {
    const mock = createMockFetch({ '/api': { status: 200, body: { ok: true } } });
    const res = await mock('/notfound');
    expect(res.status).toBe(404);
  });
});
