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

          <!-- 氣候 -->
          <wx :wx_data="wx"></wx>
          <!-- 降雨率 -->
          <POP :POP_data="POP"></POP>
          <!-- 最小溫度 -->
          <MinT :MinT_data="MinT"></MinT>
          <!-- 舒適度 -->
          <CI :CI_data="CI"></CI>
          <!-- 最高溫度 -->
          <maxT :maxT_data="maxT"></maxT>
          
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import mainNav from './components/nav.vue';
import twMap from './components/tw_map.vue';
import wx from './components/wx.vue';
import POP from './components/POP.vue';
import MinT from './components/MinT.vue';
import CI from './components/CI.vue';
import maxT from './components/maxT.vue';
export default {
  name: 'App',
  components: {
    mainNav,
    twMap,
    wx,
    POP,
    MinT,
    CI,
    maxT
  },
  data(){
    return {
      country_name: '',
      title: '',
      countries:[],
      wx:{}, // 氣候
      POP: {}, // 降雨率
      MinT: {}, //最低溫
      CI: {}, //舒適度
      maxT: {}, //最高溫

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
      var that = this;
      var countries = this.countries;
      countries.forEach(function(item, i){
        if(item.locationName == country){
          setTimeout(function(){
            that.wx = item.weatherElement[0];
            that.POP = item.weatherElement[1];
            that.MinT = item.weatherElement[2];
            that.CI = item.weatherElement[3];
            that.maxT = item.weatherElement[4];
            // console.log('country:', item.weatherElement[4]);
          }, 0);
          // [0] wx氣候 [1]Pop降雨率  [2] MinT最低溫 [3]CI舒適度  [4]ＭaxT最高溫
        }
      })
    }
  },
  created(){
    this.get_wather_data();
  }
}
</script>

<style lang="scss">

</style>
