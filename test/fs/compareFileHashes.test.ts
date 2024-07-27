import { compareFileHashes } from '../../src/fs/compareFileHashes';

describe('compareFileHashes', () => {
  it('should be a function', () => {
    expect(typeof compareFileHashes).toBe('function');
  });
});
