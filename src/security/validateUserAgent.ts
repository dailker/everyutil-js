/**
 * Detects empty, malformed, or bot user agents.
 *
 * @author @dailker
 * @param {string} agent - The user agent string.
 * @returns {boolean} True if valid, false otherwise.
 */
export function validateUserAgent(agent: string): boolean {
    if (!agent || agent.length < 6) return false;
    return !/bot|crawl|spider|scanner|curl|wget|python|scrapy|httpclient/i.test(agent);
}
