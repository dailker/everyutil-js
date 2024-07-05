import { extractPathParams } from '../../src/network/extractPathParams';

describe('extractPathParams', () => {
  it('extracts params from matching URL', () => {
    expect(extractPathParams('/user/123', '/user/:id')).toEqual({ id: '123' });
  });
  it('extracts multiple params', () => {
    expect(extractPathParams('/user/123/book/456', '/user/:uid/book/:bid')).toEqual({ uid: '123', bid: '456' });
  });
  it('returns empty object for non-matching URL', () => {
    expect(extractPathParams('/user/123', '/book/:id')).toEqual({});
  });
});
