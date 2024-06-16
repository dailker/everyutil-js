import { appendCDNPrefix } from '../../src/network/appendCDNPrefix';

describe('appendCDNPrefix', () => {
  it('appends CDN prefix to a URL', () => {
    expect(appendCDNPrefix('/img.png', 'https://cdn.com')).toBe('https://cdn.com/img.png');
  });
  it('handles trailing slashes', () => {
    expect(appendCDNPrefix('img.png', 'https://cdn.com/')).toBe('https://cdn.com/img.png');
  });
});
