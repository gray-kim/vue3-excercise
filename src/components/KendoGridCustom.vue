<template>
  <p>
    <grid
        v-if="data.dataItems"
        :data-items="data.dataItems"
        :columns="data.columns">
      <grid-norecords>
        There is no data available custom
      </grid-norecords>
    </grid>
  </p>
</template>

<script>
// import { process } from '@progress/kendo-data-query';
import { Grid, GridNoRecords } from '@progress/kendo-vue-grid';

export default {
  name: "KendoGridCustom",
  components: {
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