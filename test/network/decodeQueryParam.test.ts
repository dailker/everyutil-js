import { decodeQueryParam } from '../../src/network/decodeQueryParam';

describe('decodeQueryParam', () => {
  it('decodes plus to space', () => {
    expect(decodeQueryParam('a+b+c')).toBe('a b c');
  });
  it('decodes percent encoding', () => {
    expect(decodeQueryParam('foo%20bar')).toBe('foo bar');
  });
});
