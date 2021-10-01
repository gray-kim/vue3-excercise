<template>
  <div class="container" v-if="data.dataItems">
    <div class="row">
      <div class="col-md-12">
        <div class="table-wrap">
          <table class="table table-responsive-xl">
            <thead>
            <tr>
              <th>Email</th>
              <th>Username</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr class="alert" role="alert" v-for="item in data.dataItems">
              <td class="d-flex align-items-center">
                <div class="img"
                     :style="{backgroundImage: 'url('+item.avatar+')'}"></div>
                <div class="pl-3 email">
                  <span>{{item.email}}</span>
                  <span>{{item.email}}</span>
                </div>
              </td>
              <td>{{item.first_name}} {{item.last_name}}</td>
              <td class="status"><span class="active">Active</span></td>
<!--              <td class="status"><span class="waiting">Waiting for Resassignment</span></td>-->
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import '../css/style.css'

export default {
  name: "UserList",
  props: {
    data: {
      type : Object,
      required: false
    }
  }
}
</script>

<style scoped src="../css/style.css">

</style>