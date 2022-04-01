<template>
  <div id="CI_area">
    <div class="area_wrapper">
      <div
        class="area_section"
        :style="`background: linear-gradient(90deg, rgba(232, 168, 124, 0.4) ${CI_number}%, rgba(0, 102, 204, 0.4) ${CI_number}%);`"
        v-for="(time, i) in CI.time"
        :key="i"
      >
        <h4 class="area_rating">
          <span>舒適度</span>
          <span>
            {{ time.parameter.parameterName }}
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
  name: 'CI',
  props: {
      'CI': {
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
