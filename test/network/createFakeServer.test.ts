import { createFakeServer } from '../../src/network/createFakeServer';

describe('createFakeServer', () => {
  it('mocks fetch for registered routes', async () => {
    const unregister = createFakeServer({ '/api': { status: 200, body: { ok: true } } });
    const res = await fetch('/api');
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toEqual({ ok: true });
    unregister();
  });
  it('returns 404 for unregistered route', async () => {
    const unregister = createFakeServer({ '/api': { status: 200, body: { ok: true } } });
    const res = await fetch('/notfound');
    expect(res.status).toBe(404);
    unregister();
  });
});
