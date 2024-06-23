import { compareURLs } from '../../src/network/compareURLs';

describe('compareURLs', () => {
  it('returns true for equivalent URLs', () => {
    expect(compareURLs('http://a.com/', 'http://a.com')).toBe(true);
    expect(compareURLs('http://a.com?b=2&a=1', 'http://a.com?a=1&b=2')).toBe(true);
  });
  it('returns false for different URLs', () => {
    expect(compareURLs('http://a.com', 'http://b.com')).toBe(false);
  });
});
