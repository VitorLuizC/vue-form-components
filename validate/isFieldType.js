const types = ['text', 'email', 'password']

/**
 * Check if value is a <FormField /> type.
 * @param {*} type
 * @returns {boolean}
 */
const isFieldType = (type) => types.includes(type)

export default isFieldType
