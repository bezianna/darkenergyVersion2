<template>
  <div id="app">
    <vue-header></vue-header>
    <home></home>
    <youtube></youtube>
    <whyme></whyme>
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import header from "./components/header.vue";
import home from "./components/home.vue";
import youtube from "./components/youtube.vue";
import whyme from "./components/whyme.vue";
import footer from "./components/footer.vue";

export default {
  components: {
    "vue-header":header,
    "home":home,
    "youtube":youtube,
    "whyme":whyme,
    "vue-footer":footer
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  
}
</script>

<style>

</style>