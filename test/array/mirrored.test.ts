import { mirrored } from '../../src/array/mirrored';

describe('mirrored', () => {
  it('returns a mirrored array', () => {
    expect(mirrored([1,2,3])).toBe(false);
  });
});
