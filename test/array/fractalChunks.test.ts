import { fractalChunks } from '../../src/array/fractalChunks';

describe('fractalChunks', () => {
  it('returns fractal chunks of an array', () => {
    expect(Array.isArray(fractalChunks([1,2,3,4]))).toBe(true);
  });
});
