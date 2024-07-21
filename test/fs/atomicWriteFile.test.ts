import { atomicWriteFile } from '../../src/fs/atomicWriteFile';

describe('atomicWriteFile', () => {
  it('should be a function', () => {
    expect(typeof atomicWriteFile).toBe('function');
  });
});
