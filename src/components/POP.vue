<template>
    <div id="POP_area">
        <div class="area_wrapper">
            <div
            class="area_section"
            :style="`background:rgba(0, 102, 204, ${
                time.parameter.parameterName / 100
            })`"
            v-for="(time, i) in POP.time"
            :key="i"
            >
            <h4 class="area_rating">
                <span>降雨機率</span>
                <span>
                {{ time.parameter.parameterName
                }}{{
                    time.parameter.parameterUnit == "百分比"
                    ? "%"
                    : time.parameter.parameterUnit
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
  name: 'POP',
  props: {
      'POP': {
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
