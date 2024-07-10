import { mergeArchives } from '../../src/compression/mergeArchives';

describe('mergeArchives', () => {
  it('should be a function', () => {
    expect(typeof mergeArchives).toBe('function');
  });
});
