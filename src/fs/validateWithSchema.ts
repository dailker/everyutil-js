/**
 * Validates an object against a JSON Schema.
 *
 * @author @dailker
 * @param {any} data - The data to validate.
 * @param {object} schema - The JSON Schema object.
 * @returns {boolean} True if valid, false otherwise.
 */
export function validateWithSchema(data: any, schema: object): boolean {
    const Ajv = require('ajv');
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    return validate(data) as boolean;
}
