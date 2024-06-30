import { colorNameToHex } from '../../src/color/colorNameToHex';

describe('colorNameToHex', () => {
  it('converts color names to hex', () => {
    expect(colorNameToHex('red')).toBe('#ff0000');
    expect(colorNameToHex('blue')).toBe('#0000ff');
  });

  it('returns null if not a valid color name', () => {
    expect(colorNameToHex('notacolor')).toBe(null);
  });
});
