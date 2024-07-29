import { convertImageFormat } from '../../src/fs/convertImageFormat';

describe('convertImageFormat', () => {
  it('should be a function', () => {
    expect(typeof convertImageFormat).toBe('function');
  });
});
