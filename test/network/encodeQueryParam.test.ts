import { encodeQueryParam } from '../../src/network/encodeQueryParam';

describe('encodeQueryParam', () => {
  it('encodes special characters', () => {
    expect(encodeQueryParam("a b&c=d?e")).toBe("a%20b%26c%3Dd%3Fe");
  });
  it('encodes RFC3986 reserved chars', () => {
    expect(encodeQueryParam("!*'()"))
      .toBe("%21%2A%27%28%29");
  });
  it('returns empty string for empty input', () => {
    expect(encodeQueryParam("")).toBe("");
  });
});
