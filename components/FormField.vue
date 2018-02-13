<template>
  <fieldset class="form-field">
    <label class="label">{{ label }}</label>
    <input
      v-on="$listeners"
      v-bind="$attrs"
      v-mask="mask"
      type="text"
      class="field"
    />
  </fieldset>
</template>

<script>
  import { mask } from 'vue-the-mask'
  import isType from '@validate/isFieldType'
  import isValidators from '@validate/isFieldValidators'

  export default {
    props: {
      label: String,
      mask: [String, Array],
      type: {
        type: String,
        required: true,
        validator: isType
      },
      validators: {
        type: Array,
        default: () => [],
        validator: isValidators
      },
    },
    directives: {
      mask: (el, binding) => {
        if (binding.value)
          return mask(el, binding)
      },
    },
  }
</script>
