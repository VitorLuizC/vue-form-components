<template>
  <fieldset class="form-field">
    <label class="label">{{ label }}</label>
    <input
      v-on="$listeners"
      v-bind="$attrs"
      v-mask="mask"
      type="text"
      class="entry"
    />
  </fieldset>
</template>

<script>
  import { mask } from 'vue-the-mask'

  const types = [ 'text', 'email', 'password' ]

  const isFunction = (value) => typeof value === 'function'

  export default {
    props: {
      label: String,
      mask: [String, Array],
      type: {
        type: String,
        required: true,
        validator: (type) => types.includes(type)
      },
      validators: {
        type: Array,
        default: () => [],
        validator: (validators) => validators.every(isFunction)
      },
    },
    directives: {
      mask: (el, binding) => binding.value ? mask(el, binding) : undefined,
    },
  }
</script>
