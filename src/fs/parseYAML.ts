/**
 * Parses a YAML string into an object.
 *
 * @author @dailker
 * @template T
 * @param {string} yamlString - The YAML string to parse.
 * @returns {T} The parsed object.
 */
export function parseYAML<T>(yamlString: string): T {
    const yaml = require('js-yaml');
    return yaml.load(yamlString) as T;
}
