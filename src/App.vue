<template>
  <div>
    <mainNav></mainNav>
    <div class="container">
      <div class="row">
        <div class="col-8">
          <twMap @get_active="get_active"></twMap >
        </div>
        <div class="col-4">
          <h1>{{country}}</h1>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import mainNav from './components/nav.vue';
import twMap from './components/tw_map.vue';
export default {
  name: 'App',
  components: {
    mainNav,
    twMap 
  },
  data(){
    return {
      country: ''
    }
  },
  methods: {
    get_active(country){
      this.country = country;
    }
  },
}
</script>

<style lang="scss">

</style>
