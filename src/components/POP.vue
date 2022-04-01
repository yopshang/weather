<template>
    <div id="POP_area">
    <h3>降雨率:{{POP_data.elementName}}</h3>
    <div v-for="(time, i) in POP_data.time" :key="i">
        <h4>開始時間:{{time.startTime}}</h4>
        <h4>結束時間:{{time.endTime}}</h4>
        <h4>降雨機率:{{time.parameter.parameterName}}{{time.parameter.parameterUnit == '百分比'?'%':time.parameter.parameterUnit}}</h4>
    </div>
    </div>
</template>

<script>
export default {
  name: 'POP',
  props: {
      'POP_data': {
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
