/**
 * Checks if an IP is a known Tor exit node (uses public Tor bulk exit list).
 *
 * @author @dailker
 * @param {string} ip - The IP address to check.
 * @returns {Promise<boolean>} True if Tor exit node, else false.
 */
export async function isTorExitNode(ip: string): Promise<boolean> {
    const https = require('https');
    return new Promise(resolve => {
        https.get('https://check.torproject.org/exit-addresses', res => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data.includes(ip)));
        }).on('error', () => resolve(false));
    });
}
