<template>
    <p>
      <dropdownlist
          :data-items="data.dataItems"
          :data-item-key="'ID'"
          :text-field="'Name'">
      </dropdownlist>
      <k-button>Default Button</k-button>
    </p>
</template>

<script>
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { Button, ButtonGroup, ChipList, FloatingActionButton } from '@progress/kendo-vue-buttons';

export default {
  name: "KendoDropdown",
  components: {
    'k-button': Button,
    'dropdownlist': DropDownList,
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