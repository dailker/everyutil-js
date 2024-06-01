/**
 * Ignores SIGINT, SIGTERM, and similar signals to protect long-running processes.
 *
 * @author @dailker
 */
export function preventExitSignals(): void {
    ['SIGINT', 'SIGTERM', 'SIGHUP', 'SIGQUIT'].forEach(sig => {
        process.on(sig, () => {});
    });
}
