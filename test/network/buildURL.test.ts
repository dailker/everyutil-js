import { buildURL } from '../../src/network/buildURL';

describe('buildURL', () => {
  it('builds a URL with query params', () => {
    expect(buildURL('https://a.com', { foo: 'bar' })).toBe('https://a.com/?foo=bar');
  });
  it('handles empty params', () => {
    expect(buildURL('https://a.com', {})).toBe('https://a.com/');
  });
});
