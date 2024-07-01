import { colorTemperatureToRgb } from '../../src/color/colorTemperatureToRgb';

describe('colorTemperatureToRgb', () => {
  it('converts color temperature to rgb', () => {
    expect(colorTemperatureToRgb(6500)).toEqual({ r: expect.any(Number), g: expect.any(Number), b: expect.any(Number) });
  });

  it('returns fallback for invalid input', () => {
    expect(colorTemperatureToRgb(-100)).toEqual({ r: 255, g: NaN, b: 0 });
  });
});
