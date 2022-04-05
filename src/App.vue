<template>
  <div>
    <mainNav></mainNav>
    <router-view />
  </div>
</template>

<script>
import mainNav from "./components/nav.vue";
export default {
  name: "App",
  components: {
    mainNav,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
  created() {},
};
</script>

<style lang="scss"></style>
