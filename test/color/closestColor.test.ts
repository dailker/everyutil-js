import { closestColor } from '../../src/color/closestColor';

describe('closestColor', () => {
  it('returns the closest color in palette', () => {
    expect(closestColor('#000', ['#000', '#fff'])).toBe('#000');
    expect(closestColor('#fff', ['#000', '#fff'])).toBe('#000');
  });

  it('returns first color if palette is empty', () => {
    expect(closestColor('#000', [])).toBe(undefined);
  });
});
