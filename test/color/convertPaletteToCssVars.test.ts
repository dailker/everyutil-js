import { convertPaletteToCssVars } from '../../src/color/convertPaletteToCssVars';

describe('convertPaletteToCssVars', () => {
  it('converts a palette array to CSS variables', () => {
    const palette = ['#336699', '#ff0000'];
    const result = convertPaletteToCssVars(palette, '--main');
    expect(result).toContain('--main-0: #336699;');
    expect(result).toContain('--main-1: #ff0000;');
  });
});
