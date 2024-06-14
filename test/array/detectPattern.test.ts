import { detectPattern } from '../../src/array/detectPattern';

describe('detectPattern', () => {
  it('detects a repeating pattern', () => {
    expect(detectPattern([1,2,1,2,1,2])).toEqual({ pattern: [1,2], repeats: 3 });
  });
  it('returns null if no pattern', () => {
    expect(detectPattern([1,2,3,4])).toBe(null);
  });
});
