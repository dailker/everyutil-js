import { backupFile } from '../../src/fs/backupFile';

describe('backupFile', () => {
  it('should be a function', () => {
    expect(typeof backupFile).toBe('function');
  });
});
