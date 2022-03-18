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
    },
    get_wather_data(){
      var token = 'CWB-515CB401-8DE7-4F50-A18F-477C0E6DB913';
      var api = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-515CB401-8DE7-4F50-A18F-477C0E6DB913';
      this.axios.get(api)
        .then(res => {
          console.log(res.data)
        });
    }
  },
  created(){
    this.get_wather_data();
  }
}
</script>

<style lang="scss">

</style>
