<template>
    <div id="TW_map">
      <div class="taivan-map" ref="map">
        <div id="map">
          <svg id="svg"
            >
          </svg>
        </div>
        <div class="shop-list">
          <h1>{{h1}}</h1>
          <h2>{{h2}}</h2>
        </div>

      </div>
    </div>
</template>

<script>
export default {
  name: 'tw-map',
  data(){
    return {
      h1: '',
      h2: '',
      sampleData: []
    }
  },
  components: {
  },
  methods:{
      init_map(){
        // console.log(newData.features);
        var mercatorScale, w = this.width;
        if(w > 1366) { mercatorScale = 11000; }
        else if(w <= 1366 && w > 480) { mercatorScale = 9000; }
        else { mercatorScale = 6000; }
        // 用外層的 div 當 svg 的寬高
        const width = (this.$refs.map.offsetWidth).toFixed(),
              height = (this.$refs.map.offsetHeight).toFixed();
        var path = d3.geo.path().projection(
          d3.geo
            .mercator()
            .center([121, 24])
            .scale(mercatorScale)
            .translate([width/2, height/2.5])
        );

        // 讓d3抓svg，並寫入寬高
        var svg = d3.select('#svg')
                    .attr('width', width)
                    .attr('height', height)
                    .attr('viewBox', `0 0 ${width} ${height}`);

        // 讓d3抓GeoJSON檔，並寫入path的路徑
        var url = 'https://twmapdata.herokuapp.com/'; // GeoJSON的檔案路徑
        d3.json(url, (error, geometry) => {
          if (error) throw error;

          svg
            .selectAll('path')
            .data(geometry.features)
            .enter().append('path')
            .attr('d', path)
            .attr({
              // 設定id，為了click時加class用
              id: (d) => 'city' + d.properties.COUNTYCODE
            })
            .on('click', d => {
              this.h1 = d.properties.COUNTYNAME; // 換中文名
              this.h2 = d.properties.COUNTYENG; // 換英文名
              // 有 .active 存在，就移除 .active
              if(document.querySelector('.active')) {
                document.querySelector('.active').classList.remove('active');
              }
              // 被點擊的縣市加上 .active
              document.getElementById('city' + d.properties.COUNTYCODE).classList.add('active');
            });
        });
      },
      trans
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
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/sass/main.scss';
#map{
  height: 1000px;
  fill: transparent;
  stroke: black;
}
  #map path.active {
    stroke: red;
  }
  // .taivan-map {
  //   display: flex;
  //   #map,
  //   .shop-list {
  //     width: 50%;
  //   }
  // }
</style>
