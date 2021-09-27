<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" title="vue3 title" />
  <MyCheckbox :checked="foo"
              @change="val => {foo = val}"
              value="some value" />
  <button @click="getUserList">userList가져오기</button>
  <KendoDropdown :data="categoryDropdown"></KendoDropdown>
  <h1>User List Grid</h1>
  <KendoGridCustom v-if="userGrid.dataItems.length > 0" :data="userGrid"></KendoGridCustom>
  <h1>Product List Grid</h1>
  <KendoGridCustom :data="state"></KendoGridCustom>
</template>

<script>
import { reactive } from 'vue';

import categories from './appdata/categories.json';
import products from './appdata/products.json';

import KendoGridCustom from './components/KendoGridCustom.vue';
import KendoDropdown from "./components/KendoDropdown.vue";
import HelloWorld from './components/HelloWorld.vue';
import MyCheckbox from './components/MyCheckbox.vue';

export default {
  name: 'Vue3 App Test',
  components: {
    KendoGridCustom,
    KendoDropdown,
    HelloWorld,
    MyCheckbox
  },
  setup() {
    const state = reactive({
      dataItems: products,
      columns: [
        { field: 'ProductName', title: 'Product Name'},
        { field: 'UnitPrice', title: 'Price' },
        { field: 'UnitsInStock', title: 'Units in Stock' },
        { field: 'Discontinued'}
      ],
    })
    return {
      state
    }
  },
  data() {
    return {
      msg: '',
      userGrid: {
        dataItems: [],
        columns: [
          { field: 'first_name', title: 'first name'},
          { field: 'last_name', title: 'last name' },
          { field: 'email', title: 'email' },
          { field: 'avatar'}
        ],
      },
      categoryDropdown: {
        dataItems: categories
      }
    }
  },
  mounted() {
    console.log("mounted");
    this.init();
    // this.getUserList();
  },
  created () {
    console.log("created");
  },
  computed() {
    console.log("computed");
  },
  methods: {
    init: function() {
      this.msg = 'this is computed message!';
      console.log("init method",this.msg);
    },
    getUserList: function() {
      let $this = this;
      let userListUrl = "https://reqres.in/api/users?page=1";
      this.axios.get(userListUrl).then(function(result) { // function declartion 시 내부에서 this로 외부에 있는 data에 접근 불가해서 axios 외부에 this를 $this에 할당해서 처리
        let userList = result.data.data;
        if(userList.length > 0) {
          $this.userGrid.dataItems = userList;
        }
      });
    },
    // getUserList: function() {
    //   let userListUrl = "https://reqres.in/api/users?page=1";
    //   this.axios.get(userListUrl).then(result => { // arrow function 사용하는 경우 내부에서 this로 외부에 있는 data에 접근 가능
    //     let userList = result.data.data;
    //     if(userList.length > 0) {
    //       this.userGrid.dataItems = userList;
    //     }
    //   });
    // },
  },
}
</script>
