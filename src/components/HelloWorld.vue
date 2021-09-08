<template>
  <h1>{{ msg }}</h1>
<!--  <button @click="count++">count is: {{ count }}</button>-->
  <button @click="plusCount();">count is: {{ state.count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import { reactive } from 'vue'
// export default {
//   name: 'HelloWorld',
//   props: {
//     msg: String
//   },
//   data() {
//     return {
//       count: 0
//     }
//   }
// }

// Vue 3.x
export default {
  props: {
    msg: String
  },
  setup () {
    const state = reactive({
      count: 0
    })
    const plusCount =() => {
      state.count++;
    }
    return {
      plusCount,
      state
    }
  }
}
</script>
