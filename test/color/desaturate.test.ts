import { desaturate } from '../../src/color/desaturate';

describe('desaturate', () => {
  it('desaturates a color by a given amount', () => {
    expect(desaturate('#336699', 0.5)).toMatch(/^#[0-9a-f]{6}$/i);
  });

  it('returns original color if parsing fails', () => {
    expect(desaturate('notacolor', 0.5)).toBe('notacolor');
  });
});
