/**
 * Serializes an object into YAML format.
 *
 * @author @dailker
 * @param {any} data - The data to serialize.
 * @returns {string} The YAML string.
 */
export function stringifyYAML(data: any): string {
    const yaml = require('js-yaml');
    return yaml.dump(data);
}
