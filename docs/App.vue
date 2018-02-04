<template>
  <form-container>
    <form-field
      type="text"
      label="Name"
      :validators="[
        (name) => name && name.trim() || 'Name is required!',
        (name) => /\w\s\w/.test(name) || 'Please provide your full name'
      ]"
    />
  </form-container>
</template>
