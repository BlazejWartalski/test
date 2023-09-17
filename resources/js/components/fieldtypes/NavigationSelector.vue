<template>
  <div>
    <select v-model="data">
      <option disabled value="">Please select one</option>
      <option v-for="(title, handle) in fieldtype.navigation_options" :key="handle" :value="handle">
        {{ title }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['data', 'config', 'name', 'fieldtype'],

  watch: {
    data(newVal) {
      this.$emit('input', newVal);
    }
  },
}
</script>