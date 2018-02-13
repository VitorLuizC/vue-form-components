import FormField from '@components/FormField'
import FormContainer from '@components/FormContainer'

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
