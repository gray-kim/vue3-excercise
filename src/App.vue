<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" title="vue3 title" />
  <MyCheckbox :checked="foo"
              @change="val => {foo = val}"
              value="some value" />
  <p>
    <dropdownlist
        :data-items="state.categories"
        :data-item-key="'CategoryID'"
        :text-field="'CategoryName'"
    >
    </dropdownlist>
  </p>
  <grid
      :data-items="state.products"
      :columns="state.columns"
  ></grid>
</template>

<script>
import categories from './appdata/categories.json';
import products from './appdata/products.json';
import { process } from '@progress/kendo-data-query';
import { Grid } from '@progress/kendo-vue-grid';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { reactive } from 'vue';
import '@progress/kendo-theme-default/dist/all.css';
import HelloWorld from './components/HelloWorld.vue';
import MyCheckbox from './components/MyCheckbox.vue';

export default {
  name: 'Vue3 App Test',
  components: {
    HelloWorld,
    MyCheckbox,
    'dropdownlist': DropDownList,
    'grid': Grid,
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
      ]
    })
    return {
      state
    }
  }
}
</script>
