import { colorDistance } from '../../src/color/colorDistance';

describe('colorDistance', () => {
  it('returns 0 for identical colors', () => {
    expect(colorDistance('#000', '#000')).toBe(0);
  });

  it('returns correct distance for red and green', () => {
    expect(Math.round(colorDistance('#ff0000', '#00ff00'))).toBe(361);
  });

  it('returns 0 if parse fails', () => {
    expect(colorDistance('notacolor', '#000')).toBe(0);
  });
});
