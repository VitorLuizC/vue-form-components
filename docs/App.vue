<template>
  <form-container>
    <form-field
      type="text"
      label="Name"
      :validators="[
        (name) => name && name.trim() || 'Name is required!',
        (name) => /\w{2,}\s{1,}\w{2,}/.test(name) || 'Please provide your full name'
      ]"
    />
  </form-container>
</template>
