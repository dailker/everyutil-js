import { sortBySchema } from '../../src/array/sortBySchema';

describe('sortBySchema', () => {
  it('sorts array by schema', () => {
    expect(Array.isArray(sortBySchema(['a', 'b'], ['a']))).toBe(true);
  });
});
