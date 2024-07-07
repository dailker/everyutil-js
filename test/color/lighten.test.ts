import { darken } from '../../src/color/darken';
import { lighten } from '../../src/color/lighten';

describe('lighten', () => {
  it('lightens a hex color by a given amount', () => {
    expect(lighten('#336699', 0.2)).toBe('#5c85ad');
    expect(lighten('#000000', 0.5)).toBe('#808080');
    expect(lighten('#ffffff', 0.5)).toBe('#ffffff');
  });

  it('returns original color if parsing fails', () => {
    expect(lighten('notacolor', 0.2)).toBe('notacolor');
  });

  it('clamps values to 255', () => {
    expect(lighten('#123456', 1)).toBe('#ffffff');
  });
});

describe('darken', () => {
  it('darkens a hex color by a given amount', () => {
    expect(darken('#336699', 0.2)).toBe('#29527a');
    expect(darken('#ffffff', 0.5)).toBe('#808080');
    expect(darken('#000000', 0.5)).toBe('#000000');
  });

  it('returns original color if parsing fails', () => {
    expect(darken('notacolor', 0.2)).toBe('notacolor');
  });

  it('clamps values to 0', () => {
    expect(darken('#123456', 1)).toBe('#000000');
  });
});
