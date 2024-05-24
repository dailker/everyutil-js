/**
 * Ensures only allowed environment variables are present.
 *
 * @author @dailker
 * @param {string[]} whitelist - Allowed env var names.
 */
export function assertSafeProcessEnv(whitelist: string[]): void {
    for (const key of Object.keys(process.env)) {
        if (!whitelist.includes(key)) {
            throw new Error(`Unsafe env var detected: ${key}`);
        }
    }
}
