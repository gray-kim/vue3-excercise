<template>

</template>

<script>
export default {
  name: "FakeDb",
  data() {
    return {
      fakeDbList: [],
      fakeDbData: {}
    }
  },
  mounted() {
    this.getFakeDbData(3);
  },
  methods: {
    getFakeDbData: function(typeNo) {
      let fakeDbType = ['posts','comments','profile','db']
      let url = "https://my-json-server.typicode.com/gray-kim/fake_db/";
      let queryParams = fakeDbType[typeNo];

      this.axios.get(url+queryParams).then(result => {
        console.log(result)
        if(result.length > 0) {
          if(typeNo == 0 || typeNo == 1) {
            this.fakeDbList = result;
          } else {
            this.fakeDbData = result;
          }
        }
      });
    },
  },
}
</script>

<style scoped>

</style>