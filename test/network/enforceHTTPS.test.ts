import { enforceHTTPS } from '../../src/network/enforceHTTPS';

describe('enforceHTTPS', () => {
  it('converts http to https', () => {
    expect(enforceHTTPS('http://example.com')).toBe('https://example.com/');
  });
  it('leaves https unchanged', () => {
    expect(enforceHTTPS('https://secure.com')).toBe('https://secure.com/');
  });
  it('returns original string for invalid URL', () => {
    expect(enforceHTTPS('not a url')).toBe('not a url');
  });
});
