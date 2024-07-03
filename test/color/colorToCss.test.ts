import { colorToCss } from '../../src/color/colorToCss';

describe('colorToCss', () => {
  it('converts color object to CSS string', () => {
    expect(colorToCss({ r: 51, g: 102, b: 153 })).toBe('rgb(51,102,153)');
  });
  it('returns original string if parse fails', () => {
    expect(colorToCss({ r: 0, g: 0, b: 0 })).toBe('rgb(0,0,0)');
  });
});
