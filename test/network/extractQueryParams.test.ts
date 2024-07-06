import { extractQueryParams } from '../../src/network/extractQueryParams';

describe('extractQueryParams', () => {
  it('extracts query params from URL', () => {
    expect(extractQueryParams('https://x.com?a=1&b=2')).toEqual({ a: '1', b: '2' });
  });
  it('returns empty object for no params', () => {
    expect(extractQueryParams('https://x.com')).toEqual({});
  });
  it('returns empty object for invalid URL', () => {
    expect(extractQueryParams('not a url')).toEqual({});
  });
});
