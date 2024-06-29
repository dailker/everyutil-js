import { decodeURIComponentSafe } from '../../src/network/decodeURIComponentSafe';

describe('decodeURIComponentSafe', () => {
  it('decodes valid URI component', () => {
    expect(decodeURIComponentSafe('foo%20bar')).toBe('foo bar');
  });
  it('returns original if malformed', () => {
    expect(decodeURIComponentSafe('%E0%A4%A')).toBe('%E0%A4%A');
  });
});
