import { colorToCssVariable } from '../../src/color/colorToCssVariable';

describe('colorToCssVariable', () => {
  it('converts color to CSS variable', () => {
    expect(colorToCssVariable('#336699', 'main')).toBe('main: #336699;');
  });
});
