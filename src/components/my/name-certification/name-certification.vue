<template>
  <div>
    <header-bar @gohome="back"></header-bar>
  </div>
</template>

<script type="text/ecmascript-6">
  import headerBar from '../../../base/header-bar/header-bar.vue'
  export default{
    methods: {
      back() {
        this.$router.back()
      }
    },
    components: {
      headerBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
