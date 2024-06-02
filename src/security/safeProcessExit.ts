/**
 * Graceful process shutdown helper.
 *
 * @author @dailker
 * @param {number} [code=0] - Exit code.
 */
export function safeProcessExit(code: number = 0): void {
    process.exitCode = code;
    setTimeout(() => process.exit(code), 100);
}
