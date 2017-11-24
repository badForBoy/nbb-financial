<template>
  <div class="invitation">
    <header-bar @gohome="back" :title="title"></header-bar>
    <div>
      invitation
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import headerBar from '../../../base/header-bar/header-bar.vue'
  export default{
    data() {
      return {
        title: '邀请好友'
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
  .invitation
    position: fixed
    top: 44px
    bottom: 0
    width: 100%
    background: #333
    z-index: 200
</style>
