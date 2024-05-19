/**
 * Parses a TOML string into an object.
 *
 * @author @dailker
 * @template T
 * @param {string} tomlString - The TOML string to parse.
 * @returns {T} The parsed object.
 */
export function parseTOML<T>(tomlString: string): T {
    const toml = require('@ltd/j-toml');
    return toml.parse(tomlString) as T;
}
