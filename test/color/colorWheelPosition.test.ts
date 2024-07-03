import { colorWheelPosition } from '../../src/color/colorWheelPosition';

describe('colorWheelPosition', () => {
  it('returns a position for a color', () => {
    expect(typeof colorWheelPosition('#336699')).toBe('number');
  });
});
