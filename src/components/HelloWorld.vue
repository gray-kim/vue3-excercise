<template>
  <h1>{{ msg }}</h1>
<!--  <button @click="count++">count is: {{ count }}</button>-->
  <button @click="plusCount();">count is: {{ state.count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
// Vue 2.x
// export default {
//   name: 'HelloWorld',
//   props: {
//     msg: String,
//     title: String
//   },
//   computed: {
//     lowerCaseUsername () {
//       return this.username.toLowerCase()
//     }
//   },
//   mounted () {
//     console.log('title: ' + this.title)
//   },
//   data() {
//     return {
//       count: 0,
//       username: ''
//     }
//   }
// }

// Vue 3.x
// 다양한 옵션을 함수 형태로 제공
import { reactive } from 'vue'
import { computed } from 'vue'
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onErrorCaptured } from 'vue'

export default {
  props: {
    msg: String,
    title: String
  },
  setup (props) { // setup에서 props 사용 시 props를 attribute로 받음. 기존 2.x에서 this.으로 접근하던 방식에서 변화함
    // lifecycle hook
    onBeforeMount(() => {
      // ...
    })
    onMounted(() => {
      console.log('title: ' + props.title)
    })
    onBeforeUpdate(() => {
      // ...
    })
    onUpdated(() => {
      // ...
    })
    onBeforeUnmount(() => {
      // ...
    })
    onUnmounted(() => {
      // ...
    })
    onActivated(() => {
      // ...
    })
    onDeactivated(() => {
      // ...
    })
    onErrorCaptured(() => {
      // ...
    })

    // data 선언부
    const state = reactive({  // 반응형(reactive) 데이터 바인딩
      count: 0,
      username: '',
      lowerCaseUsername: computed(() => state.username.toLowerCase())
    })

    // method 선언부
    const plusCount =() => {
      state.count++;
    }
    return {
      // lifecycle은 return하지 않음
      plusCount,
      state
    }
  }
}
</script>
