/**
 * Detects if the Node.js process is being debugged or profiled.
 *
 * @author @dailker
 * @returns {boolean} True if debugging/profiling detected.
 */
export function detectDebugging(): boolean {
    return process.execArgv.some(arg => /--inspect|--debug|--prof/.test(arg));
}
