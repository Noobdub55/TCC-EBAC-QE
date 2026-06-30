const Ajv = require('ajv');

const ajv = new Ajv();

function validate(schema, data) {

    const valid = ajv.validate(schema, data);

    expect(valid).toBe(true);

}

module.exports = validate;