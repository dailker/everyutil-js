import { arrayFingerprint } from '../../src/array/arrayFingerprint';

describe('arrayFingerprint', () => {
  it('returns a string fingerprint for a number array', () => {
    expect(typeof arrayFingerprint([1,2,3])).toBe('string');
  });

  it('returns different fingerprints for different arrays', () => {
    expect(arrayFingerprint([1,2,3])).not.toBe(arrayFingerprint([3,2,1]));
  });

  it('returns same fingerprint for same arrays', () => {
    expect(arrayFingerprint([1,2,3])).toBe(arrayFingerprint([1,2,3]));
  });
});
