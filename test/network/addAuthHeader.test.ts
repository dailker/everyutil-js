import { addAuthHeader } from '../../src/network/addAuthHeader';

describe('addAuthHeader', () => {
  it('adds a Bearer token to a plain object', () => {
    const result = addAuthHeader({ foo: 'bar' }, 'abc123');
    expect(result).toEqual({ foo: 'bar', Authorization: 'Bearer abc123' });
  });

  it('adds a Bearer token to Headers', () => {
    const headers = new Headers();
    addAuthHeader(headers, 'xyz789');
    expect(headers.get('Authorization')).toBe('Bearer xyz789');
  });
});
