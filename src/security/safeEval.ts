/**
 * (Optional, unsafe) Evaluates code in a minimal sandbox using Node's vm module.
 *
 * @author @dailker
 * @param {string} code - The code to evaluate.
 * @returns {any} The result of the evaluation.
 */
export function safeEval(code: string): any {
    const vm = require('vm');
    return vm.runInNewContext(code, {}, { timeout: 1000 });
}
