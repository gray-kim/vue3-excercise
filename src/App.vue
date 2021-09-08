<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" title="vue3 title" />
  <MyCheckbox :checked="foo"
              @change="val => {foo = val}"
              value="some value" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyCheckbox from './components/MyCheckbox.vue'

export default {
  name: 'Vue3 App Test',
  components: {
    HelloWorld,
    MyCheckbox
  }
}
</script>
