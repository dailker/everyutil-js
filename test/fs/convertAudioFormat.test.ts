import { convertAudioFormat } from '../../src/fs/convertAudioFormat';

describe('convertAudioFormat', () => {
  it('should be a function', () => {
    expect(typeof convertAudioFormat).toBe('function');
  });
});
