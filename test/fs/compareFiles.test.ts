import { compareFiles } from '../../src/fs/compareFiles';

describe('compareFiles', () => {
  it('should be a function', () => {
    expect(typeof compareFiles).toBe('function');
  });
});
