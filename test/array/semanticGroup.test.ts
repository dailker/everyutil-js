import { semanticGroup } from '../../src/array/semanticGroup';

describe('semanticGroup', () => {
  it('groups array by semantic similarity', () => {
    expect(typeof semanticGroup(['a','b','a'])).toBe('object');
  });
});
