import isFunction from '@validate/isFunction'

/**
 * Check if value is an array with function validators.
 * @param {Array.<*>} values
 * @returns {boolean}
 */
const isFieldValidators = (values) => values.every(isFunction)

export default isFieldValidators
