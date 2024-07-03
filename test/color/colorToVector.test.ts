import { colorToVector } from '../../src/color/colorToVector';

describe('colorToVector', () => {
  it('converts hex to vector', () => {
    expect(colorToVector('#336699')).toEqual([51, 102, 153, 1]);
  });
});
