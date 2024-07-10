import { estimateCompressedSize } from '../../src/compression/estimateCompressedSize';

describe('estimateCompressedSize', () => {
  it('should be a function', () => {
    expect(typeof estimateCompressedSize).toBe('function');
  });
});
