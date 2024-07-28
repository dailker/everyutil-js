import { convertEncoding } from '../../src/fs/convertEncoding';

describe('convertEncoding', () => {
  it('should be a function', () => {
    expect(typeof convertEncoding).toBe('function');
  });
});
