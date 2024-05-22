/**
 * Serializes an object into TOML format.
 *
 * @author @dailker
 * @param {any} data - The data to serialize.
 * @returns {string} The TOML string.
 */
export function stringifyTOML(data: any): string {
    const toml = require('@ltd/j-toml');
    return toml.stringify(data);
}
