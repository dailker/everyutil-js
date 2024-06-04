/**
 * Validates and returns an environment variable, throws if required and missing.
 *
 * @author @dailker
 * @param {string} name - The environment variable name.
 * @param {boolean} [required=false] - Whether the variable is required.
 * @returns {string | undefined} The value or undefined.
 */
export function validateEnvVar(name: string, required: boolean = false): string | undefined {
    const val = process.env[name];
    if (required && !val) throw new Error(`Missing required env var: ${name}`);
    return val;
}
