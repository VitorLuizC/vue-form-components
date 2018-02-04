<template>
  <form
    v-on="$listeners"
    v-bind="$attrs"
    class="form-container"
    @submit.prevent="submit($event)"
  >
    <fieldset class="content">
      <slot />
    </fieldset>

    <fieldset class="actions">
      <slot name="action" />
    </fieldset>
  </form>
</template>

<script>
  export default {
    methods: {
      submit (event) {
        this.$emit('submit', event)
      }
    }
  }
</script>
