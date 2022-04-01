<template>
  <div id="MinT_area">
    <div class="area_wrapper">
      <div
        class="area_section"
        :style="`background:rgba(232, 168, 124, ${
          time.parameter.parameterName / 40
        })`"
        v-for="(time, i) in MinT.time"
        :key="i"
      >
        <h4 class="area_rating">
          <span>最低溫度</span>
          <span>
            {{
              time.parameter.parameterName +
              "度" +
              time.parameter.parameterUnit
            }}
          </span>
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
  name: 'MinT',
  props: {
      'MinT': {
          type: Object,
          default: {}
      }
  },
  components: {
    
  },
  methods:{
  },
  created(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/sass/main.scss';

</style>
