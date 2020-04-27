<template>
    <div>
    <footer>
        Olivér Kovács <span style="color:#2EE4CC;">composer, </span>
        <span ref="date"></span>
    </footer>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getYear: function() {
        let date = new Date();
        this.$refs["date"].innerHTML = date.getFullYear();
    }
  },
  mounted() {
    this.getYear();
  }
}
</script>