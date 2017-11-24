<template>
  <div class="my-contract">
    <header-bar @gohome="back" :title="title"></header-bar>
    <div>
      my-contract
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import headerBar from '../../../base/header-bar/header-bar.vue'
  export default{
    data() {
      return {
        title: '我的合同'
      }
    },
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
  .my-contract
    position: fixed
    top: 44px
    bottom: 0
    width: 100%
    background: #333
    z-index: 200
</style>
