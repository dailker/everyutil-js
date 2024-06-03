/**
 * Executes a function in a time-boxed VM sandbox.
 *
 * @author @dailker
 * @param {Function} fn - The function to execute.
 * @param {number} timeoutMs - Timeout in ms.
 * @returns {Promise<any>} The result or error.
 */
export async function sandboxFunction(fn: Function, timeoutMs: number): Promise<any> {
    const vm = require('vm');
    return new Promise((resolve, reject) => {
        const script = new vm.Script(`(${fn.toString()})()`);
        const context = vm.createContext({});
        let finished = false;
        const timer = setTimeout(() => {
            if (!finished) {
                finished = true;
                reject(new Error('Timeout'));
            }
        }, timeoutMs);
        try {
            const result = script.runInContext(context, { timeout: timeoutMs });
            if (!finished) {
                finished = true;
                clearTimeout(timer);
                resolve(result);
            }
        } catch (e) {
            if (!finished) {
                finished = true;
                clearTimeout(timer);
                reject(e);
            }
        }
    });
}
