<template>
  <p>
    <dropdownlist
        :data-items="data.categories"
        :data-item-key="'CategoryID'"
        :text-field="'CategoryName'"
    >
    </dropdownlist>
  </p>
  <grid
      :data-items="data.products"
      :columns="data.columns"
  ></grid>
</template>

<script>
import { process } from '@progress/kendo-data-query';
import { Grid } from '@progress/kendo-vue-grid';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import '@progress/kendo-theme-default/dist/all.css';

export default {
  name: "KendoGridCustom",
  components: {
    'dropdownlist': DropDownList,
    'grid': Grid,
  },
  props: {
    data: {
      type : Object,
      required: false
    }
  }
}
</script>

<style scoped>

</style>