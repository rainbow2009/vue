<template>
  <select v-model="modelValue" @change="changeOtions">
    <option disabled value="">Selecet from list</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOtions(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style>
</style>