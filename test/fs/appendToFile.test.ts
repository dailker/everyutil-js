import { appendToFile } from '../../src/fs/appendToFile';

describe('appendToFile', () => {
  it('should be a function', () => {
    expect(typeof appendToFile).toBe('function');
  });
});
