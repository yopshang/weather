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
import map_data from '../json/COUNTY_MOI_1090820.json'
export default {
  name: 'tw-map',
  data(){
    return {
      h1: '',
      h2: '',
      map_data,
    }
  },
  components: {
  },
  methods:{
      init_map(){
        var path = d3.geo.path().projection(
        d3.geo
          .mercator()
          .center([121, 24])
          .scale(1)
          .translate([768/2, 800/2.5])
      );
      },
      use_d3(){
        var that = this;
        var scriptTag = document.createElement("script");
        scriptTag.src = "https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js";
        scriptTag.id = "d3";
        document.getElementsByTagName('head')[0].appendChild(scriptTag);
        setTimeout(function(){
          that.init_map()
        },500)
      }
  },
  mounted(){
    this.use_d3();

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/sass/main.scss';

</style>
