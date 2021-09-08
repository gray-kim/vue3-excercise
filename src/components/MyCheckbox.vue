<template>
  <input type="checkbox" v-model="foo" value="any value"/>
</template>

<script>
export default {
  name: "MyCheckbox",
  props: {
    value: String,
    checked: {
      type: Number,
      default: 0
    }
  },
  model: {
    prop: 'checked',
    event: 'change'
  }
}
</script>

<style scoped>

</style>