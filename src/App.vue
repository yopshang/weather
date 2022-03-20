<template>
  <div>
    <mainNav></mainNav>
    <div class="container">
      <div class="row">
        <div class="col-8">
          <twMap @get_active="get_active"></twMap >
        </div>
        <div class="col-4">
          <h1>{{title}}</h1>
          <h2>{{country_name}}</h2>
          <div>
            <h3>氣候:{{wx}}</h3>
            <h3>降雨率:{{POP}}</h3>
            <h3>最低溫:{{MinT}}</h3>
            <h3>舒適度:{{CI}}</h3>
            <h3>最高溫:{{MaxT}}</h3>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import mainNav from './components/nav.vue';
import twMap from './components/tw_map.vue';
export default {
  name: 'App',
  components: {
    mainNav,
    twMap 
  },
  data(){
    return {
      country_name: '',
      title: '',
      countries:[],
      wx:'', // 氣候
      POP: '', // 降雨率
      MinT: '', //最低溫
      CI: '', //舒適度
      ＭaxT: '', //最高溫

    }
  },
  methods: {
    get_active(country){
      this.country_name = country;
      this.get_active_data_of_country(country);
    },
    get_wather_data(){
      var api = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-515CB401-8DE7-4F50-A18F-477C0E6DB913';
      this.axios.get(api)
        .then(res => {
          var weather_data = res.data;
          if(res.data.success){
            this.country_weather_handler(weather_data.records.location);
            this.country_title_handler(weather_data.records.datasetDescription);
          }else {
            alert('網路連線錯誤');
            window.location.reload();
          }
        });
    },
    country_weather_handler(countries){
        this.countries = countries;
    },
    country_title_handler(title){
      this.title = title;
    },
    get_active_data_of_country(country){
      // var country_name = this.country_name;'
      var that = this;
      var countries = this.countries;
      countries.forEach(function(item, i){
        // console.log(of_this_country);
        if(item.locationName == country){
          console.log('country:', country, item.weatherElement[0]);
          setTimeout(function(){
            that.wx_handler(item.weatherElement[0]);
          }, 0);
          // this.wx = item.weatherElement[0];
          // this.POP = item.weatherElement[1];
          // this.MinT = item.weatherElement[2];
          // this.CI = item.weatherElement[3];
          // this.MaxT = item.weatherElement[4];
          // console.log(this.wx);
          // [0] wx氣候 [1]Pop降雨率  [2] MinT最低溫 [3]CI舒適度  [4]ＭaxT最高溫
        }
      })
    },
    wx_handler(data){
      console.log(data);
    }

  },
  created(){
    this.get_wather_data();
  }
}
</script>

<style lang="scss">

</style>
