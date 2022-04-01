<template>
  <div id="wx_area">
    <h3>氣候:{{ wx_data.elementName }}</h3>

    <select v-model="current_country_select" class="form-select" aria-label="Default select example">
        <option v-for="(country, i ) in countries_options" :key="i">{{country}}</option>
    </select>

    <div v-for="(time, i) in wx_data.time" :key="i">
      <h4>開始時間:{{ time.startTime }}</h4>
      <h4>結束時間:{{ time.endTime }}</h4>
      <h4>氣候狀態:{{ time.parameter.parameterName }}</h4>
      <h4>氣候程度:{{ time.parameter.parameterValue }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "wx",
  data(){
      return {
          current_country_select: ""
      }
  },
  props: {
    wx_data: {
      type: Object,
      default: {},
    },
    countries: {
        type: Array,
        default: []
    },
    current_country: {
        type: String,
        default: ''
    }
  },
  computed:{
      countries_options: function(){
          return this.countries.map(function(item){
              item = item.locationName;
              return item;
          })
      }
  },
  components: {
  },
  methods: {
    get_data() {
      console.log(this.wx_data);
    },
  },
  created() {
    this.get_data();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/sass/main.scss";
</style>
