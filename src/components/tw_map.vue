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
      // d3,
      gdp: [
        {country: "USA", value: 20.5 },
        {country: "China", value: 13.4 },
        {country: "Germany", value: 4.0 },
        {country: "Japan", value: 4.9 },
        {country: "France", value: 2.8 }
      ]
    }
  },
  components: {
  },
  methods:{
      init_map(){
        console.log('draw map:', this.d3);
        // 座標變換函式
        var d3 = this.d3;

      },
      generateArc() {
      const w = 500;
      const h = 500;

      const svg = d3
        .select("#arc")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

      const sortedGDP = this.gdp.sort((a, b) => (a.value > b.value ? 1 : -1));
      const color = d3.scaleOrdinal(d3.schemeDark2);

      const max_gdp = d3.max(sortedGDP, o => o.value);

      const angleScale = d3
        .scaleLinear()
        .domain([0, max_gdp])
        .range([0, 1.5 * Math.PI]);

      const arc = d3
        .arc()
        .innerRadius((d, i) => (i + 1) * 25)
        .outerRadius((d, i) => (i + 2) * 25)
        .startAngle(angleScale(0))
        .endAngle(d => angleScale(d.value));

      const g = svg.append("g");

      g.selectAll("path")
        .data(sortedGDP)
        .enter()
        .append("path")
        .attr("d", arc)
        .attr("fill", (d, i) => color(i))
        .attr("stroke", "#FFF")
        .attr("stroke-width", "1px")
        .on("mouseenter", function() {
          d3.select(this)
            .transition()
            .duration(200)
            .attr("opacity", 0.5);
        })
        .on("mouseout", function() {
          d3.select(this)
            .transition()
            .duration(200)
            .attr("opacity", 1);
        });

      g.selectAll("text")
        .data(this.gdp)
        .enter()
        .append("text")
        .text(d => `${d.country} -  ${d.value} Trillion`)
        .attr("x", -150)
        .attr("dy", -8)
        .attr("y", (d, i) => -(i + 1) * 25);

      g.attr("transform", "translate(200,300)");
  }
  },
  mounted(){
    // this.init_map();
    this.generateArc();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/sass/main.scss';

</style>
