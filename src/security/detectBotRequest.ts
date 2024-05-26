/**
 * Heuristically detects if a request is from a bot/automation.
 *
 * @author @dailker
 * @param {import('http').IncomingMessage} req - The HTTP request.
 * @returns {boolean} True if likely a bot.
 */
export function detectBotRequest(req: import('http').IncomingMessage): boolean {
    const ua = (req.headers['user-agent'] || '').toLowerCase();
    return /bot|crawl|spider|scanner|curl|wget|python|scrapy|httpclient/.test(ua);
}
