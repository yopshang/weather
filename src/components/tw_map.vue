<template>
    <div id="TW_map">
      <div class="taivan-map" ref="map"></div>
      <div id="map">
        <svg id="svg"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet">
        </svg>
      </div>
      <div class="shop-list">
        <h1>{{h1}}</h1>
        <h2>{{h2}}</h2>
      </div>
    </div>
</template>

<script>
import * as d3 from 'd3';
import map_data from '../json/COUNTY_MOI_1090820.json'
export default {
  name: 'tw-map',
  data(){
    return {
      h1: '',
      h2: '',
      map_data,
      d3: d3
    }
  },
  components: {
  },
  methods:{
      init_map(){
        console.log('draw map:', this.d3);
        // 座標變換函式


      },
  },
  mounted(){
    this.init_map();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/sass/main.scss';

</style>
