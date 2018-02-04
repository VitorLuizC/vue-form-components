import FormField from './FormField'
import FormContainer from './FormContainer'

/**
 * Install all form components.
 * @param {Vue} Vue
 * @returns {void}
 */
export default (Vue) => {
  Vue.component('FormField', FormField)
  Vue.component('FormContainer', FormContainer)
}

export { FormField, FormContainer }
