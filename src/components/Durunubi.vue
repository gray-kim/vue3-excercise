<template>
  <div class="container">
    <ul class="responsive-table">
      <li class="table-header">
        <div class="col col-1">코스 번호</div>
        <div class="col col-2">코스 명</div>
        <div class="col col-3">코스 길이</div>
        <div class="col col-4">총 소요시간</div>
      </li>
      <li class="table-row" v-for="item in courseList">
        <div class="col col-1" data-label="crsIdx">{{item.crsIdx}}</div>
        <div class="col col-2" data-label="crsKorNm">{{item.crsKorNm}}</div>
        <div class="col col-3" data-label="crsDstnc">{{item.crsDstnc}}</div>
        <div class="col col-4" data-label="crsTotlRqrmHour">{{item.crsTotlRqrmHour}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Durunubi",
  data() {
    return {
      openApiKey: 'mIQqG%2F6NH6kX3XkNWhMhJpNvOiU9LBBq9EyKXbDPDdajZP5PlLK7l6Ya7pzePzkWqdv8AS2oAheLvR%2BA77BUmw%3D%3D',
      courseList: []
    }
  },
  mounted() {
    this.getCourseList();
  },
  methods: {
    getCourseList: function() {
      let url = "http://api.visitkorea.or.kr/openapi/service/rest/Durunubi/courseList";
      let queryParams = '?' + encodeURIComponent('ServiceKey') + '='+this.openApiKey; /*Service Key*/
      queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
      queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
      queryParams += '&' + encodeURIComponent('MobileOS') + '=' + encodeURIComponent('ETC'); /**/
      queryParams += '&' + encodeURIComponent('MobileApp') + '=' + encodeURIComponent('AppTest'); /**/
      queryParams += '&' + encodeURIComponent('crsKorNm') + '=' + encodeURIComponent('밀양강'); /**/
      queryParams += '&' + encodeURIComponent('routeIdx') + '=' + encodeURIComponent('T_ROUTE_MNG0000000006'); /**/
      queryParams += '&' + encodeURIComponent('crsLevel') + '=' + encodeURIComponent('2'); /**/
      queryParams += '&' + encodeURIComponent('brdDiv') + '=' + encodeURIComponent('DNBW'); /**/
      queryParams += '&' + encodeURIComponent('_type') + '=' + encodeURIComponent('json'); /**/

      this.axios.get(url+queryParams).then(result => {
        console.log(result)
        if(result.length > 0) {
          this.courseList = result;
        }
      });
    },
  },
}
</script>

<style scoped>
body {
  font-family: "lato", sans-serif;
}

.container {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
}

h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
}
h2 small {
  font-size: 0.5em;
}

.responsive-table li {
  border-radius: 3px;
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}
.responsive-table .table-header {
  background-color: #95A5A6;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.responsive-table .table-row {
  background-color: #ffffff;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
}
.responsive-table .col-1 {
  flex-basis: 10%;
}
.responsive-table .col-2 {
  flex-basis: 40%;
}
.responsive-table .col-3 {
  flex-basis: 25%;
}
.responsive-table .col-4 {
  flex-basis: 25%;
}
@media all and (max-width: 767px) {
  .responsive-table .table-header {
    display: none;
  }
  .responsive-table li {
    display: block;
  }
  .responsive-table .col {
    flex-basis: 100%;
  }
  .responsive-table .col {
    display: flex;
    padding: 10px 0;
  }
  .responsive-table .col:before {
    color: #6C7A89;
    padding-right: 10px;
    content: attr(data-label);
    flex-basis: 50%;
    text-align: right;
  }
}
</style>