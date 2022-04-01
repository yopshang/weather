<template>
  <div id="wx_area">
    <h3>氣候:{{ wx.elementName }}</h3>
    <div class="area_wrapper">
      <div
        class="area_section"
        :style="`background:rgba(0, 102, 204, ${
          time.parameter.parameterName / 100
        })`"
        v-for="(time, i) in wx.time"
        :key="i"
      >
        <h4 class="area_rating">
          <span>氣候</span>
          <span>{{ time.parameter.parameterName }}</span>
          <span>{{ time.parameter.parameterValue }}</span>
        </h4>

        <div class="area_time">
          <span class="area_starTime">{{ time.startTime }}</span>
          <span>|</span>
          <span class="area_endTime">{{ time.endTime }}</span>
        </div>
      </div>
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
    wx: {
      type: Object,
      default: {},
    },
    // countries: {
    //     type: Array,
    //     default: []
    // },
    // current_country: {
    //     type: String,
    //     default: ''
    // }
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
