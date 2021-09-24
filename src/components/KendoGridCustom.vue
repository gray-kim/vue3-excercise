<template>
  <p>
    <dropdownlist
        :data-items="data.categories"
        :data-item-key="'CategoryID'"
        :text-field="'CategoryName'">
    </dropdownlist>
    <k-button>Default</k-button>
  </p>
  <grid
      :data-items="data.products"
      :columns="data.columns">
    <grid-norecords>
      There is no data available custom
    </grid-norecords>
  </grid>
</template>

<script>
import { process } from '@progress/kendo-data-query';
import { Grid, GridNoRecords } from '@progress/kendo-vue-grid';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { Button, ButtonGroup, ChipList, FloatingActionButton } from '@progress/kendo-vue-buttons';
import '@progress/kendo-theme-default/dist/all.css';

export default {
  name: "KendoGridCustom",
  components: {
    'k-button': Button,
    'dropdownlist': DropDownList,
    'grid': Grid,
    'grid-norecords': GridNoRecords
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