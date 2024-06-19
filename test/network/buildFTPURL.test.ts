import { buildFTPURL } from '../../src/network/buildFTPURL';

describe('buildFTPURL', () => {
  it('builds an FTP URL from config', () => {
    expect(buildFTPURL({ host: 'ftp.com', user: 'u', password: 'p', port: 22, path: '/file' })).toContain('ftp://u:p@ftp.com:22/file');
  });
  it('omits port if 21', () => {
    expect(buildFTPURL({ host: 'ftp.com', port: 21 })).toBe('ftp://ftp.com');
  });
  it('handles missing user/pass', () => {
    expect(buildFTPURL({ host: 'ftp.com' })).toBe('ftp://ftp.com');
  });
});
