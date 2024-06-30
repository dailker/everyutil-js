import { colorHash } from '../../src/color/colorHash';

describe('colorHash', () => {
  it('returns a consistent hash for a color string', () => {
    expect(colorHash('#336699')).toMatch(/^#?[0-9a-f]{6}$/i);
    expect(colorHash('rgb(51,102,153)')).toMatch(/^#?[0-9a-f]{6}$/i);
  });

  it('returns different hashes for different colors', () => {
    expect(colorHash('#336699')).not.toBe(colorHash('#669933'));
  });
});
