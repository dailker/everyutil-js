import { convertCompressionFormat } from '../../src/compression/convertCompressionFormat';

describe('convertCompressionFormat', () => {
  it('should be a function', () => {
    expect(typeof convertCompressionFormat).toBe('function');
  });
});
