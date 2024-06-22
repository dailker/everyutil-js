import { reconstructSequence } from '../../src/array/reconstructSequence';

describe('reconstructSequence', () => {
  it('reconstructs a sequence from pairs', () => {
    expect(reconstructSequence([[1,2],[2,3],[3,4]])).toEqual([[1,2],[2,3],[3,4]]);
  });
});
