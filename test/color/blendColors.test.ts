import { blendColors } from '../../src/color/blendColors';

describe('blendColors', () => {
  it('blends two hex colors', () => {
    expect(blendColors('#ff0000', '#0000ff', 0.5)).toBe('#800080');
  });

  it('returns first color if ratio is 0', () => {
    expect(blendColors('#00ff00', '#0000ff', 0)).toBe('#00ff00');
  });

  it('returns second color if ratio is 1', () => {
    expect(blendColors('#00ff00', '#0000ff', 1)).toBe('#0000ff');
  });

  it('blends two hex colors', () => {
    expect(blendColors('#336699', '#ff0080', 0.5)).toBe('#99338d');
  });

  it('returns first color if parse fails', () => {
    expect(blendColors('notacolor', '#0000ff', 0.5)).toBe('notacolor');
  });
});
