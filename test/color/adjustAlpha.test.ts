import { adjustAlpha } from '../../src/color/adjustAlpha';

describe('adjustAlpha', () => {
  it('adjusts alpha of hex color', () => {
    expect(adjustAlpha('#ff0000', 0.5)).toBe('rgba(255,0,0,0.5)');
    expect(adjustAlpha('#336699', 0.5)).toBe('rgba(51,102,153,0.5)');
  });

  it('returns original color if alpha is 1', () => {
    expect(adjustAlpha('#00ff00', 1)).toBe('rgba(0,255,0,1)');
  });

  it('handles 3-digit hex', () => {
    expect(adjustAlpha('#0f0', 0.2)).toBe('#0f0');
  });

  it('returns original color if parse fails', () => {
    expect(adjustAlpha('notacolor', 0.5)).toBe('notacolor');
  });
});
