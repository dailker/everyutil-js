import { encodeURIComponentRFC3986 } from '../../src/network/encodeURIComponentRFC3986';

describe('encodeURIComponentRFC3986', () => {
  it('encodes special characters per RFC3986', () => {
    expect(encodeURIComponentRFC3986("!*'()"))
      .toBe("%21%2A%27%28%29");
  });
  it('encodes spaces and reserved chars', () => {
    expect(encodeURIComponentRFC3986("a b&c=d?e")).toBe("a%20b%26c%3Dd%3Fe");
  });
  it('returns empty string for empty input', () => {
    expect(encodeURIComponentRFC3986("")).toBe("");
  });
});
