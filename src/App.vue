<template>
<!--  <img alt="Vue logo" src="./assets/logo.png" />-->
<!--  <HelloWorld msg="Hello Vue 3.0 + Vite" title="vue3 title" />-->
<!--  <MyCheckbox :checked="foo"-->
<!--              @change="val => {foo = val}"-->
<!--              value="some value" />-->
  <KendoGridCustom :data="state"></KendoGridCustom>
</template>

<script>
import { reactive } from 'vue';
import axios from 'axios';

import categories from './appdata/categories.json';
import products from './appdata/products.json';

import KendoGridCustom from './components/KendoGridCustom.vue';
import HelloWorld from './components/HelloWorld.vue';
import MyCheckbox from './components/MyCheckbox.vue';

Vue.prototype.$http = axios;

export default {
  name: 'Vue3 App Test',
  components: {
    KendoGridCustom,
    HelloWorld,
    MyCheckbox
  },
  mounted() {
    this.getUserList();
  },
  methods: {
    getUserList: function() {
      let userListUrl = "https://reqres.in/api/users?page=2";
      $http.get(userListUrl).then(function(result) {
        state.userList = result.data;
      });
    }
  },
  setup() {
    const state = reactive({
      categories : categories,
      products: products,
      columns: [
        { field: 'ProductName', title: 'Product Name'},
        { field: 'UnitPrice', title: 'Price' },
        { field: 'UnitsInStock', title: 'Units in Stock' },
        { field: 'Discontinued'}
      ],
      userList: []
    })
    return {
      state
    }
  }
}
</script>
